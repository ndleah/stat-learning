# What is Statistical Learning?

There are 2 types of statistical learning: _supervised_ and _unsupervised_.

> * **Supervised learning** is when you have a label for each data point, which mean it involves building a model that can predict an _output_ based on one or more _inputs_.
> * **Unsupervised learning** is when you don't have a label for each data point, where there are _inputs_ but no supervising _output_.

In statistical learning, _**input variables**_ $$(X_{n})$$ are typically denoted by _features_, _predictors_, _indepedent variables_ or _variables_ while _**output variable**_ $$(Y)$$ often called _dependent variable_ or _response_.

To assess the relationship between predictors $$X_{1}, X_{2}, ...,X_{p}$$, we have the equation as following:

$$
\Large Y=f(X) + \epsilon
$$

Whereas:

* $$f$$ is fixed but unknown function of $$X_{1},...,X_{p}$$ and $$\epsilon$$ is a random _error term_, which is independent of $$X$$ and has mean zero.

In essence, statistical learning refers to a set of approaches for estimating $$f$$.

***

## Why Estimate f?

There are 2 main reasons: _**prediction**_ and _**inference**_.

### Prediction

Hypothetically, let's say we have the _**error term**_ averages to 0, predicting $$Y$$ can be assessed using this equation:

$$
\hat{Y} = \Large \hat{f}(X)
$$

Whereas:

* $$\hat{f}$$ represents the estimate for $$f$$
* $$\hat{Y}$$ represents the resulting predcition for $$Y$$

The accuracy of $$\hat{Y}$$ as a prediction for $$Y$$ depends on 2 quantities: _**reducible error**_ and _**irriducible error**_.

> * _**reducible error**_: Reducible error is the error arising from the mismatch between $$\hat{f}$$ and $$f$$. Can be improved by choosing a better model. Usually caused by [Variance Error](overview.md#variance-error)/[Bias Error](overview.md#bias-error).
> * _**irriducible error**_: Errors which can't be removed no matter what algorithm you apply. These errors are caused by unknown variables that are affecting the independent/output variable but are not one of the dependent/input variable while designing the model.

### Inference

Neccessary questions need to be asked in order to further understand the relationship between predictors $$(X_{n})$$ and outcome $$(Y)$$:

* _**Which predictors are associated with response?**_ Only a small fraction of the available predictors are associated with the response.
* _**What is the relationship between predictors and response?**_ The relationship between predictors and response is not always linear.
* _**Can the relationship between predictors and response be explained by the linear model or it is more complicated?**_ The model can explain the relationship between predictors and response if the model is able to predict the response based on the predictors.

***

## How Do We Estimate f?

In order to estimate $$f$$, our goal is to apply a statistical learning method to the training data. Broadly speaking, most statistical learning methods for this task can be characterized as either _**parametric**_ or _**non-parametric**_.

### Parametric Methods

Parametric methods (model-based approach) are those that are able to estimate the parameters of the model based on the training data. It involves a **two-step model-based approach**:

1. First, we make an assumption about the functional form, or shape, of $$f$$. In other words, we need to choose the model that best fits the data.
2. After the model has been selected, we need a procedure that uses the training data to _fit_ or _train_ the model.

Potential disadvantages of parametric methods is that the model will not usually match the true $$f$$. This can be avoid by choosing a more _flexible_ models that can fit many possible functions for $$f$$ forms and usually require greater number of parameters.

{% hint style="info" %}
Example fitting models for parametric methods (linear): **Odirnary Least Squares (OLS), Lasso.**
{% endhint %}

### Non-Parametric Methods

Non-parametric methods (model-free approach) seek an estimate of $$f$$ without make explicit assumptions about the functional form of of $$f$$. Major disadvantages of this approach is that a very large number of observations is required in order to obtain an accurate estimate for $$f$$.

{% hint style="info" %}
Example fitting models for non-parametric methods: _**smooth thin-plate spline fit**_ and _**rough thin-plate spline fit**_**.**
{% endhint %}

***

## The Tradeoff Between Prediction Accuracy and Model Interpretability

![Figure 1. Tradeoff Between Prediction Accuracy and Model Interpretability](<../Chapter 2 - Statistical Learning/img/xkcd-interpretability-vs-flexibility.png>)

Figure 1 illustrates the tradeoff between flexibility and interpretability of using different statistical learning methods. In general, as the flexibility increase, the interpretability decreases.

**Why would we ever choose to use a more restrictive method instead of a very flexible approach?**&#x20;

If we are mainly interested in the interpretability of the model, we would rather use a more flexible model. This is because the flexibility of the model is usually better than the interpretability of the model.&#x20;

In contrast, if we are interested in the prediction accuracy of the model, we would rather use a more restrictive model. This is because the flexibility of the model is usually better than the prediction accuracy of the model.

***

## Supervised Vs. Unsupervised Learning

Most statistical learning problems involve both **supervised** and **unsupervised learning**.

**In supervised learning**, we wish to fit a model to the training data and predict the response variable based on the predictors, with the aim of accurately predicting the response variable or better understanding the relationship between predictors and response variable.

Some of the statistical approaches that apply the supervised learning method are:

* **Linear Regression**
* **Logistic Regression**
* **Boosting & Support Vector Machine**
* **Generalized Additive Models (GAMs)**

In contrast, **unsupervised learning methods **are those that do not require any training data. One statistical learning tool that we may use in this setting is _cluster analysis_ or clustering. The goal of this method is to ascertain, whether observations fall into distinct groups.

***

## Regression Vs. Classification

Variables can be characterized as either _**quantitative**_ or _**qualitative**_.&#x20;

* Quantitative variables are those that can be measured in terms of a number.&#x20;
* Qualitative variables are those that can be measured in terms of a set of categories.

We tend to refer to problems with a quantitative response variable as **regression** problems and problems with a qualitative response variable as **classification** problems. However, an important note is that it does not matter much whether the predictors/variables are quantitative or qualitative.