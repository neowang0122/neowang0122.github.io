---
author: LYY
---
tags: #publishedNote
Author: #people/LYY

---

# Probability Distributions

## Exponential family
$$
b(x)exp(\theta^T T(x) - A(\theta))
$$

Includes: Bernoulli , Binomial, Gaussian, Poisson, Gamma, Exponential, Dirichlet

It shows a specific linear characteristic for $x$.

## Bernoulli
$$
\begin{align*}
& \quad \alpha^x(1-\alpha)^{1-x} \quad , x\in \{0,1\} \\
&= exp(log(\alpha^x(1-\alpha)^{1-x} )) \\
&= exp(xlog(\alpha) + (1-x)log(1-\alpha) )) \\
&= exp(x(log(\frac{\alpha}{1-\alpha}) + log(1-\alpha) )) \\
\end{align*}
$$

$$
\begin{align*}
& b(x)=1\\
& T(x) =x\\
& \theta = log(\frac{\alpha}{1-\alpha}) \\
& A(\theta) = - log (1-\alpha) = log(\frac{1}{1-\alpha}) = log(1+\frac{\alpha}{1-\alpha}) = log(1+exp(\theta))
\end{align*}
$$

## Gaussian

$$
\begin{align*}
& \quad \frac{1}{\sqrt{2\pi}\sigma}exp(-\frac{(x-\mu)^2}{2\sigma^2}) \\
& = \frac{1}{\sqrt{2\pi}} exp(-log\sigma) \cdot exp(-\frac{(x-\mu)^2}{2\sigma^2}) \\
& = \frac{1}{\sqrt{2\pi}} exp(-log\sigma- \frac{x^2}{2\sigma^2} - \frac{\mu^2}{2\sigma^2}+\frac{x\mu}{\sigma^2})\\
& = \frac{1}{\sqrt{2\pi}} exp(\frac{x\mu}{\sigma^2}- \frac{x^2}{2\sigma^2}-log\sigma - \frac{\mu^2}{2\sigma^2})\\
\end{align*}
$$

$$
\begin{align*}
& b(x)=\frac{1}{\sqrt{2\pi}}\\
& T(x)= [x, x^2]\\
& \theta = [\frac{\mu}{\sigma^2}, \frac{-1}{2\sigma^2}]\\
& A(\theta)=log\sigma+ \frac{\mu^2}{2\sigma^2}
\end{align*}
$$

