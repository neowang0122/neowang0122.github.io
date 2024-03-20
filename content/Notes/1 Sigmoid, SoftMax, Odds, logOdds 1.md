---
author: LYY
---
tags: #publishedNote
Author: #people/LYY

---

# 1 Sigmoid

Transfer logit $z$ to a probability by mapping $z$ to $(0,1)$.

**Definition**:
$$P=\frac{1}{1+exp(-z)}$$
**Derivative**:
$$
\begin{align*}
\frac{\partial P}{\partial z} & = - (1+exp(-z))^{-2} \cdot exp(-z) \cdot (-1) &\{P \in (0,1)\} \\
& = \frac{exp(-z)}{(1+exp(-z))^2} \\
& = \frac{1}{1+exp(-z)} \cdot \frac{exp(-z)}{1+exp(-z)} \\
& = P \cdot (1-P) \\
& >0  
\end{align*}
$$
It means $z \uparrow, p \uparrow$ . 

# 2 SoftMax

Transfer logits $z_i$ to probabilities by normalizing sequence $z_i$ to $(0,1)$, where the summation is equal to 1.

**Definition**: 
$$
P_k = \frac{exp(z_k)}{\sum_i exp(z_i) }
$$
**Derivative**:
$$
\begin{align*}
\frac{\partial P_k}{\partial z_k} & = \frac{exp(z_k)\sum_i exp(z_i) - exp(z_k)^2}{(\sum_i exp(z_i))^2} &\{P_i \in (0,1)\} \\
& = \frac{exp(z_k)}{\sum_i exp(z_i) } \cdot \frac{\sum_i exp(z_i)-exp(z_k)}{\sum_i exp(z_i) } \\
& = P_k \cdot (1-P_k) \\
& >0  
\end{align*}
$$
It means $z_k \uparrow, p_k \uparrow$ . 
$$
\begin{align*}
\frac{\partial P_k}{\partial z_j} & = \frac{- exp(z_k)\cdot exp(z_j)}{(\sum_i exp(z_i))^2} &\{P_i \in (0,1)\} \\
& = - P_k \cdot P_j \\
& < 0  
\end{align*}
$$
It means $z_j \uparrow, p_k \downarrow$ . 

# 3 Odds

**Introduction**:
- Win rate: 4 to 1, odds = {number of wins}/{number of loses} = 4

**Definition**: Assume have probability $p$ to win,

$$\text{odds}= \text{win rate} = \frac{p}{1-p}$$
We usually use $log(odds)$, because it has better symmetry property.
- Win rate: 4 to 1, odds = 4, but $log(odds)= log4$.
- Win rate: 1 to 4,  odds = 1/4, but $log(odds) = - log4$.

**Relationship** between probability and $log(odds)$: **sigmoid** $\sigma$
$$
\begin{align*}
p &= \frac{odds}{1+odds} \\
&= \frac{exp(log(odds))}{1+exp((log(odds)))}\\
&= \frac{1}{1+exp(-log(odds))}\\
&= \sigma(log(odds))
\end{align*}
$$

**Example** for machine learning:
1.**Logistic Regression**: 对数线性模型

$$
\text{Probabiliy(Postive Class)} = P = f(x) = \frac{1}{1+e^{-z}}, \quad z= wx+b
$$

Easy to find
$$
z = log(\frac{p}{1-p})
$$

2.**XgBoost** for Classification
$$
\begin{align*}
Loss & = L(y_i, p_i) \\
& = -(y_i log(p_i) +(1-y_i)log(1-p_i)) \\
& = -(y_i log(\frac{p_i}{1-pi}) + log(1-p_i)) \\
& = -(y_i log(odds) - log(1+\frac{p_i}{1-p_i})) \\
& = -(y_i log(odds) - log(1+ odds)) \\
& = -y_i log(odds) + log(1+ odds) \\
\end{align*}
$$

Derivative

$$
\begin{align*}
g_i & = \frac{\partial L}{\partial log(odds_i)}\\
& = - y_i + \frac{e^{log(odds_i)}}{1+e^{log(odds_i)}}\\
& = - y_i + \frac{odds_i}{1+odds_i}\\
& = - y_i + p_i\\
\end{align*}
$$

Second Order Derivative
$$
\begin{align*}
h_i &= \frac{\partial^2 L}{\partial^2 log(odds_i )} \\
&= \frac{\partial g_i}{\partial log(odds_i)} \\
&= \sigma(log(odds_i))(1-\sigma(log(odds_i))) \\
&= p_i (1-p_i)
\end{align*}
$$

$$

$$