# Assessing Model Accuracy

> _"**There is no free lunch in statistics"**_

No one method dominates all others over all possible data sets. This section introduce some common ways to assess the accuracy of a model to select a statistical learning procedure for a specific data set.



## The Regression Setting

### Measuring the Quality of fit

In order to evaluate the performance of a model, we need to measure how well its predictions actually match the observed data. In the regression setting, the most commonly used measure is the **mean squared error (MSE)**:

$$\Large MSE = \frac{1}{n}\sum_{i = 1}^{n} (y_{n} - \hat{f}(x_{i})^2$$

given by where $$\hat{f}(x_{i}$$ is the prediction that $$\hat{f}$$ gives for the ith observations.

The MSE will be small if the predicted responses are very close to the true response, and will be large if for some observations, the predicted and true responses differ substantially.

* _**training MSE**_: The MSE is computed using the training data that was used to fit the model.
* _**test MSE**_: The MSE is computed using the previously unseen test observation not used to train the statistical learning method.

When a given method yields a small training MSE but a large test MSE, we are said to be _overfitting_ the data. When we overfit the training data, the test MSE will be very large because the supposed patterns that the method found in the training data simply don't exist in the test data.

### The Bias-Variance Trade-Off

#### **Variance Error**

> **Variance** is the amount that the estimate of $$\hat{f}$$ will change if different training data was used.

Ideally, it should not change too much from one training dataset to the next, meaning that the algorithm is good at picking out the hidden underlying mapping between the inputs and the output variables.

{% hint style="info" %}
Examples of low-variance machine learning algorithms include: **Linear Regression, Linear Discriminant Analysis and Logistic Regression.**
{% endhint %}

{% hint style="info" %}
Examples of high-variance machine learning algorithms include: **Decision Trees, k-Nearest Neighbors** and **Support Vector Machines.**
{% endhint %}

#### **Bias Error**

**Bias** are the simplifying assumptions made by a model to make the target function easier to learn.

Generally, linear algorithms have a high bias making them fast to learn and easier to understand but generally less flexible. In turn, they have lower predictive performance on complex problems that fail to meet the simplifying assumptions of the algorithms bias.

* **Low Bias:** Suggests less assumptions about the form of the target function.
* **High-Bias:** Suggests more assumptions about the form of the target function.

{% hint style="info" %}
Examples of low-bias machine learning algorithms include: **Decision Trees, k-Nearest Neighbors **and **Support Vector Machines.**
{% endhint %}

{% hint style="info" %}
Examples of high-bias machine learning algorithms include: **Linear Regression, Linear Discriminant Analysis** and **Logistic Regression.**
{% endhint %}

#### **Bias-Variance Trafe-Off**

The goal of any supervised machine learning algorithm is to achieve _low bias_ and _low variance_. In turn the algorithm should achieve good prediction performance.

You can see a general trend in the examples above:

* **Linear machine learning algorithms** often have a high bias but a low variance.
* **Nonlinear machine learning algorithms** often have a low bias but a high variance.
* The parameterization of machine learning algorithms is often a battle to balance out bias and variance.

***

## The Classification Setting

The most common approach for quantifying the accuracy of our estimate $$\hat{f}$$ is the _training error_\_ rate, the proportion of mistakes that are made if we apply our estimate $$\hat{f}$$ to the training observations:

$$\Large \frac{1}{n}\sum_{i = 1}^{n} I (y_{i} \neq \hat{y_{i}})$$

Whereas:

* $$\hat{y_{i}}$$: the predicted class label for the ith observation using $$\hat{f}$$
* $$I (y_{i} \neq \hat{y_{i}})$$: an _indicator variable_ that equal **1** if $$y_{i} \neq \hat{y_{i}}$$ and **0** if $$y_{i} = \hat{y_{i}}$$. If:
  * $$I (y_{i} \neq \hat{y_{i}}) = 0$$: correct classification
  * $$I (y_{i} \neq \hat{y_{i}}) \neq 0$$: incorrect classification (misclassified)

A good classifier is one for which the _test error_ is smallest where the _test error_ rate associated with a set of test observations of the from $$(x_{0}, y_{0})$$.

***

### The Bayes Classifier

This algorithm is called Naïve because it works on the naïve assumption that the features are independent. Naïve Bayes Classifier works with principle of Bayes Theorem.

> Conditional probability of an event $$A$$ given $$B$$, $$P(A|B)$$ is the probability of $$A$$ given that $$B$$ has already occurred. It is often defined as the ratio of joint probability of $$A$$ and $$B$$ (probability of $$A$$ and $$B$$ occurring together) to the marginal probability of $$A$$ (probability of event $$A$$)

**Pros**

* Easy to implement
* Performs reasonably well with noisy data

**Cons**

* Poor performance with continuous features
* Assumption that features are independent is risky

***

### K-Nearest Neighbors (KNN)

K-Nearest neighbors algorithm can be used to solve both classification and regression problems. When algorithms such as Naïve Bayes Classifier uses probabilities from training samples for predictions, KNN is Lazy learner that does not create any model in advance. The just find the closest based on feature similarity.

**Pros**

* Easy to implement
* No assumptions involved

**Cons**

* Optimal K is always a challenge
* Lazy learner- computationally expensive
