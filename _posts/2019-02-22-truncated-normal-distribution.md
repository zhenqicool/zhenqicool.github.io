---
layout: post
title:  Notes for "Truncated Normal Distribution"
date:   2019-02-22 16:00:06 +0800
background: '/img/note/cmn/truncated_distribution.jpg'
categories: jekyll update
---
### 1. Definition
+ A **normal distribution** restricting the range of value of variable $x$.

### 2. Significance
+ The **example calculation** shows the reliability obtained **under the trucated distribution** at both end is **more in line** with the actual situation than that obtained under **the theoreical distribution**.

### 3. Implement in tensorflow
```python
    """
    Values more than two standard deviation from mean are discarded 
    or re-dram.
    Args:
        stddev: a python scalar or a scalar tensor. 
        Standard deviation of the random values to generate.
    """
    tf.truncated_normal_initializer(stddev=0.01) 
```