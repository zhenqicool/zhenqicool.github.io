---
layout: post
title:  Notes for "L2 Regularization"
date: 2019-2-27 03
background: "/img/note/cmn/l2_regularization.jpg"
---
### 1. Definition
+ L2_regularization is adding a **Regularization Term** after cost function, which is one of the resolution for **Overfittering Problem**.
  
$$ C = C_0 + \frac{\lambda}{2\alpha} \sum_\omega \omega^2 $$

+ (In the above formula, $\lambda$ is a large factor, because of it, the **contribution** $\omega$ made for the finial cost is **smaller**.)