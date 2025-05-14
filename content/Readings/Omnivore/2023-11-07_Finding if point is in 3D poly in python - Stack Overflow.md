---
id: 2d0753bb-850e-448a-8f7e-181871074d19
title: |
  Finding if point is in 3D poly in python - Stack Overflow
author: |
  fatalaccidents
date_saved: 2023-11-07 10:20:12
draft: true
---

# Finding if point is in 3D poly in python - Stack Overflow
#Omnivore

[Read on Omnivore](https://omnivore.app/me/finding-if-point-is-in-3-d-poly-in-python-stack-overflow-18baa5ea7fd)

[Read Original](https://stackoverflow.com/questions/29311682/finding-if-point-is-in-3d-poly-in-python)

date_saved: 2023-11-07 10:20:12


--- 

# Full Content: 

## Question: 4 votes

I am trying to find out whether a point is in a 3D poly. I had used another script I found online to take care of a lot of the 2D problems using ray casting. I was wondering how this could be changed to work for 3D polygons. I'm not going to be looking at really strange polygons with a lot of concavity or holes or anything. Here is the 2D implementation in python: 

```smali
def point_inside_polygon(x,y,poly):

    n = len(poly)
    inside =False

    p1x,p1y = poly[0]
    for i in range(n+1):
        p2x,p2y = poly[i % n]
        if y > min(p1y,p2y):
            if y <= max(p1y,p2y):
                if x <= max(p1x,p2x):
                    if p1y != p2y:
                        xinters = (y-p1y)*(p2x-p1x)/(p2y-p1y)+p1x
                    if p1x == p2x or x <= xinters:
                        inside = not inside
        p1x,p1y = p2x,p2y

    return inside

```

Any help would be greatly appreciated! Thank you. 

[**fatalaccidents**](https://stackoverflow.com/users/1449208/fatalaccidents) \- 192 reputation - 2 silver badges, 13 bronze badges - asked Mar 27, 2015 at 23:15

### Comments

[**songololo**](https://stackoverflow.com/users/1190200/songololo): Depending on what you mean by 3d poly, the issue may be defining what exactly a 3d poly is, and thus how to define this algorithmically. Is your poly on a plane and can it therefore be projected to a 2d plane? If not, then do you mean a 3d mesh (like a box or pyramid?) And if not that, and if it is a warped pancake shape or such, then I can't think how exactly you'd define whether a point is 'inside' the poly. - Mar 27, 2015 at 23:55

[**fatalaccidents**](https://stackoverflow.com/users/1449208/fatalaccidents): I was hoping to have the poly be a list of (x,y,z) points. Just as in the code above it only would handle basic shapes because the connectivity is assumed, so any concavity or things like that could possibly mess up the algorithm. So for instance, I might have a list of points generated from the equation of a sphere, or some kind of cylinder, cone, or parallelpiped. I hope this helps to clarify. - Mar 30, 2015 at 14:15

[**songololo**](https://stackoverflow.com/users/1190200/songololo): It sounds like you want to find out if a point is inside a 3d mesh. (Not sure how one would do it, but must be possible.) Maybe take a look at qhull, which does convex hulls, it may have functionality exposed in python that lets you check if a point is inside the convex hull. (Though this wouldn't work for convexities.) - Mar 31, 2015 at 7:22

[**sancho.s ReinstateMonicaCellio**](https://stackoverflow.com/users/2707864/sancho-s-reinstatemonicacellio): For completenes... code posted and related info can be found in geospatialpython.com/2011/01/point-in-polygon.html - Sep 9, 2016 at 19:50

## Answer: 6 votes

A similar question was posed [here](https://stackoverflow.com/questions/16750618), but with focus on _efficiency_.

The `scipy.spatial.ConvexHull` approach suggested here by [@Brian](https://stackoverflow.com/a/40324845/3801913) and [@fatalaccidents](https://stackoverflow.com/a/29376396/3801913) works, but get's **very slow** if you need to check more than one point.

Well, the [most efficient solution](https://stackoverflow.com/a/16898636/3801913), also comes from `scipy.spatial`, but makes use of `Delaunay` tesselation:

```pgsql
from scipy.spatial import Delaunay

Delaunay(poly).find_simplex(point) >= 0  # True if point lies within poly

```

This works, because `-1` is returned by `.find_simplex(point)` if the point is not in any of the simplices (i.e. outside of the triangulation). (Note: it works in N dimensions, not only 2/3D.)

---

### Performance comparison

First for **one point**:

```reasonml
import numpy
from scipy.spatial import ConvexHull, Delaunay

def in_poly_hull_single(poly, point):
    hull = ConvexHull(poly)
    new_hull = ConvexHull(np.concatenate((poly, [point])))
    return np.array_equal(new_hull.vertices, hull.vertices)

poly = np.random.rand(65, 3)
point = np.random.rand(3)

%timeit in_poly_hull_single(poly, point)
%timeit Delaunay(poly).find_simplex(point) >= 0

```

Result:

```angelscript
2.63 ms ± 280 µs per loop (mean ± std. dev. of 7 runs, 100 loops each)
1.49 ms ± 153 µs per loop (mean ± std. dev. of 7 runs, 100 loops each)

```

So the `Delaunay` approach is faster. But this depends on the polygon size! I found that for a polygon consisting of more than \~65 points, the `Delaunay` approach becomes increasingly slower, while the `ConvexHull` approach remains almost constant in speed.

For **multiple points**:

```reasonml
def in_poly_hull_multi(poly, points):
    hull = ConvexHull(poly)
    res = []
    for p in points:
        new_hull = ConvexHull(np.concatenate((poly, [p])))
        res.append(np.array_equal(new_hull.vertices, hull.vertices))
    return res

points = np.random.rand(10000, 3)

%timeit in_poly_hull_multi(poly, points)
%timeit Delaunay(poly).find_simplex(points) >= 0

```

Result:

```basic
155 ms ± 9.42 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
1.81 ms ± 106 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)

```

So `Delaunay` gives an extreme speed increase; not to mention how long we have to wait for 10'000 points or more. In such case, the polygon size doesn't have a too large influence anymore.

---

In summary, `Delaunay` is not only much faster, but also very concise in the code.

[**BottleNick**](https://stackoverflow.com/users/3801913/bottlenick) \- 148 reputation - 2 silver badges, 7 bronze badges - answered Mar 13, 2020 at 14:28

### Comments

[**MHO**](https://stackoverflow.com/users/4836647/mho): Are you sure, that this always scale favourably? If you execute a Delaunay on 30000 pts, i.e. your 3d poly is large, it's much slower than the qhull. - May 19, 2020 at 11:01

[**BottleNick**](https://stackoverflow.com/users/3801913/bottlenick): Exactly! That's what I already noted: I found that for a polygon consisting of more than \~65 points, the Delaunay approach becomes increasingly slower, while the ConvexHull approach remains almost constant in speed.\` - May 20, 2020 at 12:14

## Answer: 5 votes

I checked out the QHull version (from above) and the linear programming solution (e.g. see [this question](https://stackoverflow.com/questions/8261260/how-to-fastest-check-if-point-3d-is-inside-convex-hull-given-by-set-of-point)). So far, using QHull seems to be the best bet, although I might be missing some optimizations with the `scipy.spatial` LP.

```python
import numpy
import numpy.random
from numpy import zeros, ones, arange, asarray, concatenate
from scipy.optimize import linprog

from scipy.spatial import ConvexHull

def pnt_in_cvex_hull_1(hull, pnt):
    '''
    Checks if `pnt` is inside the convex hull.
    `hull` -- a QHull ConvexHull object
    `pnt` -- point array of shape (3,)
    '''
    new_hull = ConvexHull(concatenate((hull.points, [pnt])))
    if numpy.array_equal(new_hull.vertices, hull.vertices): 
        return True
    return False


def pnt_in_cvex_hull_2(hull_points, pnt):
    '''
    Given a set of points that defines a convex hull, uses simplex LP to determine
    whether point lies within hull.
    `hull_points` -- (N, 3) array of points defining the hull
    `pnt` -- point array of shape (3,)
    '''
    N = hull_points.shape[0]
    c = ones(N)
    A_eq = concatenate((hull_points, ones((N,1))), 1).T   # rows are x, y, z, 1
    b_eq = concatenate((pnt, (1,)))
    result = linprog(c, A_eq=A_eq, b_eq=b_eq)
    if result.success and c.dot(result.x) == 1.:
        return True
    return False


points = numpy.random.rand(8, 3)
hull = ConvexHull(points, incremental=True)
hull_points = hull.points[hull.vertices, :]
new_points = 1. * numpy.random.rand(1000, 3)

```

where

```elm
%%time
in_hull_1 = asarray([pnt_in_cvex_hull_1(hull, pnt) for pnt in new_points], dtype=bool)

```

produces:

```routeros
CPU times: user 268 ms, sys: 4 ms, total: 272 ms
Wall time: 268 ms

```

and

```elm
%%time
in_hull_2 = asarray([pnt_in_cvex_hull_2(hull_points, pnt) for pnt in new_points], dtype=bool)

```

produces

```routeros
CPU times: user 3.83 s, sys: 16 ms, total: 3.85 s
Wall time: 3.85 s

```

[**Community**](https://stackoverflow.com/users/-1/community) \- 1 reputation - no badge - edited May 23, 2017 at 12:02

[**Brian**](https://stackoverflow.com/users/1131073/brian) \- 3,472 reputation - 3 gold badges, 27 silver badges, 39 bronze badges - answered Oct 29, 2016 at 23:59

## Answer: 1 vote

Thanks to all that have commented. For anyone looking for an answer for this, I have found one that works for some cases (but not complicated cases). 

What I am doing is using scipy.spatial.ConvexHull like shongololo suggested, but with a slight twist. I am making a 3D convex hull of the point cloud, and then adding the point I am checking into a "new" point cloud and making a new 3D convex hull. If they are identical then I am assuming that it must be inside the convex hull. I would still appreciate if someone has a more robust way of doing this, as I see this as a bit hackish. The code would look something like as follows:

```haxe
from scipy.spatial import ConvexHull

def pnt_in_pointcloud(points, new_pt):
    hull = ConvexHull(points)
    new_pts = points + new_pt
    new_hull = ConvexHull(new_pts)
    if hull == new_hull: 
        return True
    else:
        return False

```

Hopefully this helps someone in the future looking for an answer! Thanks!

[**fatalaccidents**](https://stackoverflow.com/users/1449208/fatalaccidents) \- 192 reputation - 2 silver badges, 13 bronze badges - answered Mar 31, 2015 at 18:59fatalaccidents

### Comments

[**songololo**](https://stackoverflow.com/users/1190200/songololo): Good thought. Should work for most cases except for objects with convexities. I see that scipy.spatial.ConvexHull has an add\_points method, which may let you eliminate the new\_pts line and do something like this instead: new\_hull = hull.add\_points(new\_pt)... (Perhaps more performant than creating a convex hull from scratch? Though just check that it doesn't edit the original directly, which would throw your truth comparisons out of whack...) - Apr 6, 2015 at 11:38

[**Christian O'Reilly**](https://stackoverflow.com/users/1825043/christian-oreilly): This is not working because the == operator has not been implemented so that it would check if all the points are corresponding. The easy way to demonstrate that it does not work if by running: "from copy import deepcopy; ConvexHull(vertices) == deepcopy(ConvexHull(vertices))" This returns False. - Apr 11, 2017 at 9:26

---

