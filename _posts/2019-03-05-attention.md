---
layout: post
title:  Notes for "Attention Content-Based Function"
date: 2019-3-4 01
background: "/img/note/attention/attention.png"
---
### Content-Based Function
+ In the paper ***Effective Approaches to Attention-based Neural Machine Translation***, **score** is referred as a content-based function for which they consider three different alternatives:

$$ 
score(h_t,\overline{h}_s) = 
\begin{equation}  
\left\{  
            \begin{array}{l}  
            h_t^T\overline{h}_s, & & dot \\  
            h_t^TW_a\overline{h}_s, & & general \\  
            v_a^Ttanh(W_a[h_t;\overline{h}_s]), & & concat
            \end{array}  
\right.
\end{equation}  
$$
