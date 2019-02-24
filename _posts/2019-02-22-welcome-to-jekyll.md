---
layout: post
title:  Notes for "CMN for Recommendation Systems"
date:   2019-02-22 16:00:06 +0800
background: '/img/note/CMN.png'
categories: jekyll update
---
### 1. Deficiency of existing methods composed with deep learning arthitectures.
Ignoring a major class of CF(collaborative flitering) models, neighborhood or memory-based approaches.


### 2. CMN Model
#### Three parts
1. internal user-specific memory
2. internal item-specific memory
3. collective neighborhood state

#### ***User Embedding***
- **$m_u$** is target user embeding, **$q_{uiv}$** is a scalar which size represents similarity between **$u$** and **$v$**, **$i$**.

$$q_{uiv}=m_u^Tm_v + e_i^Tm_v \ \ \forall v \in N(i)$$ 

#### ***Neighborhood Attention***
+ Traditional neighborhood methods predefine a heuristic weighting function such as Pearson correlation or cosine similarity and **require specifiying the number of users to consider**, **Neighborhood Attention** needn't doing this, just compute the attention weights for **a given user** to infer the importance of **each user's** unique contribution to the **neighborhood**:  
 
$$ p_{uiv} = \frac{exp(q_{uiv})}{\sum_{k\in N(j)}q_{uik}} \ \ \forall v\in N(i) $$

+ Finially **construct** the **neighborhood attention** representation by interpolating the external neighborhood memory with the attention weights:

$$ o_{ui} = \sum_{v\in N(i)}p_{uiv}c_{v} $$

+ ($c_v$ is anthor embedding vector for user $v$; $C$ with the same dimensions as $M$; $o_{ui}$ represents **a weighted sum** of neighborhood composed of relations between the specific user, item and the neighborhood.)

#### ***Output Model***
#### ***Outpu***
$\sum_i^N$

