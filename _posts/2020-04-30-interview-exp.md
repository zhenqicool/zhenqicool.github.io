---
layout: post
title: BATM 自然语言处理面经（BAM Offered）
date: 2020-04-30 12:44
background: '/img/note/interview.png'
categories: neural_network
---
### 1.前言
博主是做NLP对话方向的，经历了一个多月的准备，从机器学习、深度学习、数据结构三个维度进行了准备，最终取得了还算不错的成果，在这里将前期准备经验和面试经历分享给大家，希望能有所帮助。个人认为学习过程注意以下几点：
1. 三类算法岗**机器学习、NLP、CV**的知识体系其实有许多相通的地方，下面的一些经验同样适用于非NLP算法岗位的复习。
2. 多总结知识点，类比的去记忆学习，往往事半功倍。
3. 多刷别人的面经。


### 2.NLP必备知识点
#### 机器学习基础
1. **线性回归推导**（矩阵和非矩阵形式）
2. **逻辑斯蒂回归**
   1. 一句话描述该算法、
   2. 什么是对几率、
   3. 公式推导、
   4. 二分类交叉熵
   5. 为什么用极大似然估计，为什么对似然函数取对、
   6. 为什么用sigmoid函数及其优缺点
   7. Logistc为何用极大似然函数作为损失而不用平方损失、
   8. 如何多分类（多分类交叉熵与二分类交叉熵区别）
   9. 多分类softmax交叉熵求导
3. **最大熵模型**
4. **BP神经网络**
   1. 结构图、
   2. 前向传播推导、
   3. 反向传播梯度求解（$w_{hj}, \theta_j, v_{ih}, \gamma_h$）
5. **支持向量机**
   1. 一句话描述该算法、
   2. 拉格朗日乘子法、KKT条件、
   3. svm基本型、
   4. 对偶性质理解及其好处、
   5. 公式求导推，最后转化为求解$\alpha_i$的凸二次规划问题、
   6. SMO算法理解、
   7. 线性不可分（软松弛、核函数）推导、
   8. 常见的核函数（高斯核、拉普拉斯核、多项式核、sigmoid核）
6. **决策树**
   1. （推导）信息熵、条件熵、信息增益、信息增益比、基尼指数、
   2. 决策树生成过程及终止条件、
   3. ID3、C4.5、CART分类树、CART回归树的区别与联系、
   4. 决策树剪枝（剪枝交叉验证）
7. **集成学习**
   1. Bagging和Boosting策略的理解、
   2. 随机森林的思想和优缺点、
   3. 前向分布算法和加法模型、
   4. Adaboost、GBDT、XgBoost的推导、
   5. XgBoost节点分裂依据、 
   6. Adaboost、GBDT、XgBoost、LGB区别与联系
8. **朴素贝叶斯**
   1. 一句话描述该算法、
   2. 先验后验概率、
   3. “朴素”在哪儿、
   4. 朴素贝叶斯公式、
   5. 朴素贝叶斯推断过程、
   6. 朴素贝叶斯参数估计（拉普拉斯平滑）
9. **HMM、CRF**
   1. 图搜索算法比较，原理及时间空间复杂度（贪心、$A^*$、beam-search、viterbi、
   2. HMM介绍（两大假设 、三大要素）、
   3. HMM三大问题，概率求解、状态变量预测、参数估计、
   4. CRF定义、假设、建模、
   5. CRF参数估计推导、
   6. HMM与CRF区别与联系
10. **KNN、K-means、DBSCAN**
    1.  常用的距离理解（欧式距离、曼哈顿距离、切比雪夫距离、闵可夫斯基距离、标准欧式距离）、
    2.  KNN思想、预测过程、优缺点、
    3.  K-means思想、过程、优缺点、
    4.  K-means++思想、
    5.  SSE、
    6.  DBSCAN思想、过程、优缺点

#### 深度学习相关
1. **文本表示模型发展**
   1. One-hot、
   2. TF-IDF、
   3. N-gram、
   4. Word2vec（CBOW、Skip-gram）、
   5. Glove、
   6. 负采样公式、
   7. 层softmax理解
2. **注意力机制及应用**
   1. Encoder-decoder结构、
   2. Global attention推导、
   3. Local attention推导、
   4. Self attention推导（multi—head）、
   5. Transformer结构、其encoder部分和decoder区别与联系、
   6. ELMO结构、思想、优缺点、
   7. GPT结构、思想、优缺点、
   8. BERT结构、思想、优缺点、
   9. XLnet结构、思想、优缺点
3. **CNN在NLP中的应用**
   1. 模型结构、使用方法、
   2. 适合任务、
   3. CNN、RNN对比与联系
4. **RNN、LSTM、GRU**
   1. 推导、
   2. 结构图（会手绘）、
   3. RNN链式求导、
   4. RNN会导致梯度消失原因及LSTM、GRU可以改善这一问题的原因
5. **优化器（一阶、二阶）**
   注：下述算法必须会手推
   1. BGD、SGD、MBGD、
   2. 指数加权平均、
   3. Momentum、NAG、
   4. Adagrad、RMSprop、AdaDelta、Adam、
   5. 牛顿法、拟牛顿法、DFP、BFGS、L-BFGS
6. **过拟合**
   1. 过拟合原因、
   2. 过拟合解决方式、
   3. L1、L2正则区别、
   4. dropout
7. **权重初始化**
   1. 