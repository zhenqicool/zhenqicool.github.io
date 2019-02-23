---
layout: post
title:  Notes for "CMN for Recommendation Systems"
date:   2019-02-22 16:00:06 +0800
background: '/img/posts/03.jpg'
categories: jekyll update
---
#### 1. Deficiency of existing methods composed with deep learning arthitectures.
+ Ignoring a major class of CF(collaborative flitering) models, neighborhood or memory-based approaches.

#### 2. CMN Model
+ Three parts
1. internal user-specific memory
2. internal item-specific memory
3. collective neighborhood state

+ ***User Embedding***
1. **$m_u$** is target user embeding, **$q_{uiv}$** is a scalar which size represents similarity between **$u$** and **$v$**, **$i$**.

$$ q_{uiv}=m_u^Tm_v $$

+ ***Neighborhood Attention***
+ 