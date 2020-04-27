---
layout: post
title: Theory of Decision Tree 11
date:   2019-03-05 1
background: '/img/note/H(D).png'
categories: neural_network
---
#### 1.决策树主要解决的问题：分类问题
#### 2.给定条件：
+ 样本集$D$
+ 特征集合$A_k$
$$
  \forall k \in K
$$
+ 所有分类集合$N$以及依据分类而划分的子集$D_i$
$$
  \forall i \in N 且 D_1 \cup D_2 \cup ... \cup D_n = D
$$

#### 3.核心概念：熵、信息增益、信息增益比
+ 熵反映分类集合的不确定度，其中log一般以2为底，单位是比特

$$
H(D) = - \sum_i^{n} p_i log p_i  
$$

+ 条件熵：在特征A的情况下集合$D$的不确定度，$J$表示A特征的不同取值，公式即为该特征下熵的数学期望
  
$$
H(D|A) = \sum_j^J p_j H_j(D)
$$

+ 信息增益：某一特征对整体样本预测不确定度的减少程度

$$
g(D, A) = H(D) - H(D|A)
$$

+ 信息增益率：由于信息增益往往趋向于选择特征值多的那一特征，故选用信息增益率作为另一种评测

$$
g_R(D, A) = \frac{H(D) - H(D|A)}{H(D|A)}
$$