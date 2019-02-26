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
+ The output model smoothly **integrates a nonlinear interaction** between **the local collective neighborhood state** and **the global user and item memories**, while existing method lack of the nonlinear interaction between the two items, **limiting the extent of captured relations**.
+ For **a given user $u$** and **item $i$** the ranking score is given as:

$$ \hat{r}_{ui} = v^T\varnothing(\ U(m_u\odot e_i) + Wo_{ui} + b \ ) $$

+ (where $\odot$ is **elementwise product**; $v,b\in \mathbb{R}^d$; and $U,W \in \mathbb{R}^{d*d}$ are **parameters to be learned**; $\varnothing$ is a **nonlinear activation function**, empirically the rectified unit(**ReLU**) $\varnothing(x) =  max(0,x)$ to **work best** due to its **nonsaturating nature and suitability for sparse data**.)

#### Multiple Hops
+ The hops help to look back and reconsider **the most similar users** to infer **more precise neighborhood**.
+ The model apply a nonlinear prejection between hops:

$$ z_{ui}^h = \varnothing(W^hz_{ui}^{h-1} + o_{ui}^h + b^h) $$

+ The initial query $z_{ui}^0 = m_u + e_i$.
+ The user preference $z_{ui}^h$ is used to **solicit the user neighborhood**. 

$$ q_{uiv}^{h+1} = (z_{ui}^{h})^Tm_v \ \ \forall v \in N(i) $$

+ The output model receives the weighted neighborhood vector from the last hop $H^{th}$ to produce the final recommendation.

### 3. Experimant
#### Code 
+ Foking from ***[https://github.com/tebesu/CollaborativeMemoryNetwork](https://github.com/tebesu/CollaborativeMemoryNetwork)***
+ Enviroment

```python
        for u, i in self.train_data:
            self.user_items[u].add(i)
            self.item_users[i].add(u)
            # Get a list version so we do not need to perform type casting
            self.item_users_list[i].append(u)
        self._max_user_neighbors = max([len(x) for x in self.item_users.values()])
```