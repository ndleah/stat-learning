# Multiple Linear Regression

In general, the multiple linear regression model takes the form

$$
Y = \beta_0 + \beta_1X_1 + \beta_2X_2 + ... + \beta_nX_n + \epsilon
$$

## Some Important Questions:

When we perform multiple linear regression, we usually are interested in answering a few important questions.

1. *Is at least one of the predictor $$X_1, X_2,...,X_p$$ useful in predicting the response?*
2. *Do all the predictors help to explain $$Y$$, or is only a subset of the predictors useful?*
3. *How well does th model fit the data?*
4. *Given a set of predictor values, what response value should we predict, and how accurate is our prediction?*

---

## Response and Predictors Relationships


In the multiple regression setting with $$p$$ predictors, we can use a hypothesis test to discover the relationship between predictors and response:

$$
H_0 = \beta_1 = \beta_2 = ... = \beta_p = 0
$$

versus the alternative
$$
H_a = \beta_j \neq 0 
$$

This hypothesis test is performed by computing the *F-statistic*

$$
F = \frac{(TSS-RSS)/p}{RSS/(n-p-1)}
$$

If F-statistic:
* **Near 1** - no relationship between response and predictors.
* **Greater than 1** - there is some relationship between response and predictors.

{% hint style="danger" %}
F-statistic only apply when the number of $$p$$ predictors is small.
When *p* is large, some of the approaches discussed in the next section, such as *forward selection*, can be used.
{% endhint %}

---

## Dealing With Large Number Of Variables

The task of determining which predictors are associated with the response is referred to as *variable selection*. 

There are 3 classical approaches:

* ***Forward selection***: starts with no selected variables. During subsequent steps, it evaluates if each candidate variable improves some chosen statistical criterion given previously selected variables, and adds the variable that improves the criterion most. It repeats these steps until none of the remaining variables improves the criterion.
* ***Backward selection***:starts with the full model, that is, all the variables. At each step, it removes a variable that is least important and does not meet the criterion.
* ***Mixed (Stepwise) selection***: is the combination of forward selection and backward elimination. Start with no variables in the model, then add variables that is the best fit. However, if at any point the p-value for one of the variables in the model series rises above a certain threshold, then we remove that variable out of the model.

---

## Model Fit

Using the same methods: RSE and $$R^2$$ statistic as simple linear regression.
