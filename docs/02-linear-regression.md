---
output: 
  html_document:
    theme: flatly
    highlight: tango
---



# Linear Regression

## Simple Linear Regression

***Simple linear regression*** is a very straightforward approach for predicting a qualitative response $Y$ on the basis of a single predictor $X$. Mathematically, we can write this linear relationship as

$$
Y \approx \beta_0 + \beta_1 X
$$

Whereas:

* $\beta_0$: intercept
* $\beta_1$: slope

### Estimating the Coefficients

In practice, $\beta_0$ and $\beta_1$ are unknown. So before make predictions, we must use data to estimate the coefficients. Let $(x_1, Y_1), (x_2, Y_2),...,(x_n, Y_n)$
represent $n$ observation pairs, each of which consists of a measurement of $X$ and a measurement of $Y$. Our goal is to obtain coefficient estimates $\beta_0$ and $\beta_1$ such that the linear model fits the available data well. In other words, we want to find an intercept $\beta_0$ and a slope $\beta_1$ such that the resulting line is as close as possible to the $n$ data points.

![**Figure 3.1**. Regression Line](img/regression.png)

There are numbers of ways of measuring *closeness*. However, by far the most common approach involves minimizing the *least squares* criterion, and we take that approach in this chapter.



#### The Least Square Approach {-}

Let $Y_i = \beta_0 + \beta_1 X_i$ be the prediction for $Y$ based on the $i$th value of $X$. Then $e_i = y_i -\hat{y}+i$ represents the $i$th *residual* - this is the difference between the $i$th value and the $i$th reponse value that is predicted by our linear model. We define the ***residual sum of square (RSS)*** as

$$
RSS = e_1^2 + e_2^2 + ... + e_n^2
$$

or equivalent as 
$$
RSS = (y_1 - \hat{\beta_0} - \hat{\beta_1}x_2)^2 + (y_2 - \hat{\beta_0} - \hat{\beta_1}x_2)^2  + ... + (y_n - \hat{\beta_0} - \hat{\beta_1}x_n)^2
$$

***The least square approach*** chooses $\hat{\beta_0}$ and $\hat{\beta_1}$ to minimize the RSS.



### Assessing the Accuracy of the Coefficient Estimates

#### **Population Regression Line:** {-}
 
$$
Y=\beta_0 + \beta_1X + \epsilon
$$

where $\epsilon$ mean zero random error term.

#### **Least squares line:** {-}
$$
\hat{y}=\hat{\beta_0} + \hat{\beta_1}X 
$$

true relationship between $X$ and $Y$ takes the form $Y=f(X)+\epsilon$.

Fundamentally, the concept of these two lines (population regression line vs. least squares line) is a natural extension of the standard statistical approach of using information from a sample to estimate characteristics of a large population. 

For example, suppose that we are interested in knowing the population mean $\mu$  of some random variable $Y$. Unfortunately, $\mu$ is unknown, but we do have access to $n$ observations from $Y$, which we can write as $y_1$, $y_2$, $\cdots$, $y_n$, and which we can use to estimate $\mu$. A reasonable estimate is $\hat{\mu}$ = $\hat{y}$, where $\hat{y} = \dfrac {1}{n}\sum^n_{i=1}{y_i}$ is the sample mean.

The sample mean and the population mean are different, but in general the sample mean will provide a good estimate of the population mean. In the same way, the unknown coefficients $\beta_0$ and $\beta_1$ in linear regression define the population regression line. We seek to estimate these unknown coefficients using \hat{\beta_0} and \hat{\beta_1} given in the least square line formula above. These coefficient estimates define the least squares line.

The analogy between linear regression and estimation of the mean of a random variable is an apt one based on the concept of bias. If we use the sample mean $\hat{\mu}$ to estimate $\mu$, this estimate is unbiased, in the sense that on average, we expect $\hat{\mu}$ to equal $\mu$.

In other words, if we estimate $\beta_0$ and $\beta_1$ on the basis of a particular data set, then our estimates won’t be exactly equal to $\beta_0$ and $\beta_1$. But if we could average the estimates obtained over a huge number of data sets, then the average of these estimates would be spot on! 

In fact, we can see from the right-hand panel of Figure 3.3 that the average of many least squares lines, each estimated from a separate data set, is pretty close to the true population regression line.


![**Figure 3.2.** A simulated data set.](img/fig3.3.png)

* **Left:** The red line represents the true relationship, $f(X) = 2+3Xf(X)=2+3X$, which is known as the population regression line. The blue line is the least squares line; it is the least squares estimate for $f(X)$ based on the observed data, shown in black. 

* **Right:** The population regression line is again shown in red, and the least squares line in dark blue. In light blue, ten least squares lines are shown, each computed on the basis of a separate random set of observations. Each least squares line is different, but on average, the least squares lines are quite close to the population regression line.

#### **How Accurate Is The Sample Mean $\hat{\mu}$ As An Estimate Of Population Mean $\mu$** {-}

We answer this question by computing the ***standard error*** of$\mu$, written as SE($\hat{\mu}$).

Standard errors can also be used to perform ***hypothesis tests*** on the coefficients. The most common hypothesis test involves testing the ***null hypothesis*** of 

* $H_0$: There is no relationship between $X$ and $Y$
* $H_a$: There is some relationship between $X$ and $Y$

Mathematically, this corresponds to testing

$$
H_0: \beta_1 = 0
$$

versus
$$
H_1: \beta_1 \neq 0
$$

If $\beta_1 = 0$ then the model reduces to $Y=\beta_0+\epsilon$, and $X$ is not associated with $Y$.

To test the null hypothesis, we need to determine whether $\hat{\beta_1}$, our estimate for $\beta_1$, is sufficiently far from zero that we can be confident that $\beta_1$ is non-zero. 
 
#### **How far is far enough?** {-}

This is course depends on the accuracy of $\hat{\beta_1}$ -that is, it depends on $SE(\hat{\beta_1})$. If SE($\hat{\beta_1}$) is small, then even relatively small values of $\hat{\beta_1}$ may provide strong evidence that $\beta_1 \neq 0$​, and hence that there is a relationship between $X$ and $Y$. In contrast, if SE($\hat{\beta_1}$) is large, then $\hat{\beta_1}$ must be large in absolute value in order for us to reject the null hypothesis. 

#### **T-distribution** {-}

**The t-distribution** describes the standardized distances of sample means to the population mean when the population standard deviation is not known, and the observations come from a normally distributed population.

In practice, we compute a ***t-statistic***, given by
$$
t=\dfrac{\hat{\beta_1}-0}{SE(\hat{\beta_1})}
$$

For example, we have a t-distribution with $n-2$ degrees of freedom as in Figure 3.3.

![**Figure 3.3.** Sampling Distribution of Test Statistic](img/tstat.png)

The t-distribution has a bell shape and for values of n greater than approximately 30 it is quite similar to the normal distribution. Consequently, it is a simple matter to compute probability of observing any value equal to $|t|$ or larger, assuming $\beta_1 =0$. We call this probability the ***p-value***.

$$
P(|T| > t) = p
$$

Roughly speaking, we interpret the ***p-value*** as follows: 

If we see a small p-value, then we can infer that there is an association between the predictor and the response. We reject the null hypothesis-that is, we declare a relationship to exist between X and Y- if the p-value is small enough.

Typical p-value cutoffs for rejecting the null hypothesis are 5 or 1 %. When n = 30, these corresponds to t-statistics of around 2 and 2.75, respectively.

### Assessing the Accuracy of the Model

After we have rejected the null hypothesis, t is natural to want to quantify the *extend of the model fits the data*.

The quality of a linear regression fit is typically assessed using 2 related quantities: the *residual standard error* and the $R^2$ statistic.

#### Residual Standard Error 
The RSE is an estimation of the standard deviation of $\epsilon$. Roughly speaking, it is the average amount that the response will deviate from the true regression line. It is computed using the formula:

$$
RSE=\sqrt{\frac{1}{n-2}} RSS= \sqrt{\frac{1}{n-2} {\sum_{i=1}^n (y_{i} - \hat{y_1})^{2}}}
$$

The RSE is considered a measure of the *lack of fit* of the model to the data:

* If RSE is small, we can conclude that the model fits the data very well.

* In contrast, if RSE is large, it indicates that the model doesn't fit the data well.

<div class="alert alert-danger hints-alert">
  <div class="hints-icon"><i class="fa fa-info"></i></div>
  <div class="hints-container">
   One consideration of RSE is it is the measure in the units of $Y$ and thus, the method is not always clear what constitute a good RSE.
  </div>
</div>

:::puzzle
hello halle
:::

#### **$R^2$ Standard Error**

The $R^2$ statistic takes the form of a *proportion*-the proportion of variance explained-and so it always takes on a value between 0 and 1, and is independent of the scale of $Y$. To calculate $R^2$, we use the formula:

$$
R^2 = \frac{TSS}{TSS−RSS}=1−\frac{TSS}{RSS}
$$

Whereas:

* **TSS**: total sum of square.
* **RSS**: measures the amount of variability that is left unexplained after performing the regression.

In terms of evaluating the $R^2$ statistic result:

* $R^2$ statistic close to 1 - the model fits well.
* $R^2$ statistic close to 0 - the model does not fit well.



### Consideration

**Simple linear regression** is a useful approach for predicting a response on the basis of a single predictor variable. However, in practice we often have more than one predictor. 
 
The solution for this is to use another linear regression named as **Multiple Linear Regression**, which will be discussed in the next section.

## Multiple Linear Regression

In general, the multiple linear regression model takes the form

$$
Y = \beta_0 + \beta_1X_1 + \beta_2X_2 + ... + \beta_nX_n + \epsilon
$$

#### Some Important Questions: {-}

When we perform multiple linear regression, we usually are interested in answering a few important questions.

1. *Is at least one of the predictor $X_1, X_2,...,X_p$ useful in predicting the response?*
2. *Do all the predictors help to explain $Y$, or is only a subset of the predictors useful?*
3. *How well does th model fit the data?*
4. *Given a set of predictor values, what response value should we predict, and how accurate is our prediction?*



#### Response and Predictors Relationships


In the multiple regression setting with $p$ predictors, we can use a hypothesis test to discover the relationship between predictors and response:

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

<div class="alert alert-danger hints-alert">
  <div class="hints-icon"><i class="fa fa-info"></i></div>
  <div class="hints-container">
   F-statistic only apply when the number of $p$ predictors is small.
   
   When *p* is large, some of the approaches discussed in the next section, such as *forward selection*, can be used.

  </div>
</div>



#### Dealing With Large Number Of Variables

The task of determining which predictors are associated with the response is referred to as *variable selection*. 

There are 3 classical approaches:

* ***Forward selection***: starts with no selected variables. During subsequent steps, it evaluates if each candidate variable improves some chosen statistical criterion given previously selected variables, and adds the variable that improves the criterion most. It repeats these steps until none of the remaining variables improves the criterion.
* ***Backward selection***:starts with the full model, that is, all the variables. At each step, it removes a variable that is least important and does not meet the criterion.
* ***Mixed (Stepwise) selection***: is the combination of forward selection and backward elimination. Start with no variables in the model, then add variables that is the best fit. However, if at any point the p-value for one of the variables in the model series rises above a certain threshold, then we remove that variable out of the model.



#### Model Fit

Using the same methods: RSE and $R^2$ statistic as simple linear regression.

## Other Considerations in the Regression Model

#### Potential Problems {-}

When we fit a linear regression model, many problems can occur, to name a few:

* *Non-linearity of the response-predictor relationships.*
* *Correlation of error terms.*
* *Non-constant variance of error terms.*
* *Outliers.*
* *High-leverage points.*
* *Collinearity.*



#### Non-linearity of the Data

The first assumption of Linear Regression is that relations between the independent and dependent variables must be linear.

Although this assumption is not always cited in the literature, it is logical and important to check for it. After all, if your relationships are not linear, you should not use a linear model, but rather a non-linear model of which plenty exist.

We can check for linear relationships easily by making a scatter plot for each independent variable with the dependent variable as in Figure 3.9.

![Figure 3.9. Plots of residuals versus predicted (or fitted) values for the Auto data set](img/107-Figure3.9-1.png)

In each plot, the red line is a smooth fit to the residuals, intended to make it easier to identify a trend. 

* **Left:** A linear regression of `mpg` on horsepower. A strong pattern in the residuals indicates non-linearity in the data. 
* **Right:** A linear regression of `mpg` on `horsepower` and `horsepower2`. There is little pattern in the residuals.



#### Correlation of Error Terms

If there is correlation among the error terms $\epsilon_1, \epsilon_2,...,\epsilon_n$, then the estimated standard errors (SE) will tend to underestimate the true SE. As the result, p-value associated with the model will be lower than they should be, which could cause us to erroneously conclude that a parameter is statistically significant.

<div class="alert alert-danger hints-alert">
  <div class="hints-icon"><i class="fa fa-info"></i></div>
  <div class="hints-container">
   Such correlations frequently occur in the context of *time series* data, which consist of observations for which measurements are obtained at adjacent time points will have positively correlated errors.

  </div>
</div>

<div class="alert alert-success hints-alert">
  <div class="hints-icon"><i class="fa fa-info"></i></div>
  <div class="hints-container">
   In order to determine if this is the case for a given data set, we can plot the residuals from our model as a function of time.
  </div>
</div>



Figure 3.10 provides an illustration. **In the top panel**, we see the residuals from a linear regression fit to data generated with uncorrelated errors. There is no evidence of a time-related trend in the residuals.

In contrast, **the residuals in the bottom panel** are from a data set in which adjacent errors had a correlation of 0.9. Now there is a clear pattern in the residuals—adjacent residuals tend to take on similar values. 

Finally, **the center panel** illustrates a more moderate case in which the residuals had a correlation of 0.5. There is still evidence of tracking, but the pattern is less clear.


![Figure 3.10. Plots of residuals from simulated time series data sets generated with differing levels of correlation ρ between error terms for adjacent time points](img/109-Figure3.10-1.png)



#### Non-constant Variance of Error Terms (Heteroscedasticity)

Heteroscedasticity in a model means that the error is constant along the values of the dependent variable.

<div class="alert alert-success hints-alert">
  <div class="hints-icon"><i class="fa fa-info"></i></div>
  <div class="hints-container">
   One can identify non-constant variances in the errors, or heteroscedasticity, from the presence of a funnel shape in heteroscedathe residual plot.

  </div>
</div>

An example is shown in the left-hand panel of Figure 3.11, sticity in which the magnitude of the residuals tends to increase with the fitted values. In each plot, the red line is a smooth fit to the residuals, intended to make it easier to identify a trend. The blue lines track the outer quantiles of the residuals, and emphasize patterns: 

* **Left:** The *funnel shape* indicates heteroscedasticity. 

* **Right:** The response has been log transformed, and there is now no evidence of heteroscedasticity.

![Figure 3.11. Residual plots](img/110-Figure3.11-1.png)

Some of the suggested solutions are: 

1. ***Do some work on your input data*** like having some variables to add or remove. 

2. ***Do transformations***, like applying concave function such as *logistics* ($logY$) or *square root* $\sqrt{Y}$.

3. If this doesn’t change anything, you can also switch to the ***weighted least squares model***. *Weighted least squares* is a model that can deal with unconstant variances and heteroscedasticity is therefore not a problem. 



#### Outlier

An **outlier** is a point for which yi is far from the value predicted by model. Outliers can arise for a variety of reasons, such as incorrect recording of an observation during data collection.

As illustrated in Figure 3.12:

* **Left:** The least squares regression line is shown in red, and the regression line after removing the outlier is shown in blue. 

* **Center:** The residual plot clearly identifies the outlier. 

* **Right:** The outlier has a ***studentized residual*** of 6; typically we expect values between −3 and 3.

![Figure 3.12. Outlier plots](img/111-Figure3.12-1.png)

If we believe that an outlier has occurred due to an error in data collection or recording, then one solution is to simply remove the observation.



#### High Leverage Points

In contrast to outlier with unusual for response value $y$, observations with high leverage high leverage have an unusual value for $x_i$.

As illustrated in Figure 3.12:

![Figure 3.13. Leveraging Observations Plots](img/112-Figure3.13-1.png)

* **Left:** Observation 41 is a high leverage point, while 20 is not. The red line is the fit to all the data, and the blue line is the fit with observation 41 removed.

* **Center:** The red observation is not unusual in terms of its X1 value or its X2 value, but still falls outside the bulk of the data, and hence has high leverage. 

* **Right:** Observation 41 has a high leverage and a high residual. 


In order to quantify an observation’s leverage, we compute the ***leverage
statistic***.

$$
h_i = \frac{1}{n} + \frac{(x_i - \overline{x})^2}{\sum_{i'=1}^{n}(x_i' - \overline x)^2}
$$

A large value of this statistic indicates an observation with high leverage.



#### Collinearity

***Collinearity*** refers to the situation in which two or more predictor variables are closely related to one another.

In order to check for collinearity, we can either use ***Correlation Matrix*** or ***Variance Inflation Factor (VIF)***.



##### Correlation Matrix {-}

A simple way to detect collinearity is to look at the correlation matrix
of the predictors. An element of this matrix that is large in absolute value indicates a pair of highly correlated variables, and therefore a collinearity problem in the data. 

![Figure 3.14. Sample Correlation Matrix using R](img/unnamed.png)

Unfortunately, not all collinearity problems can be detected by inspection of the correlation matrix: it is possible for collinearity to exist between three or more variables even if no pair of variables has a particularly high correlation. We call this situation ***multicollinearity***.

Multicollinearity causes problems in using regression models to draw conclusions about the relationships between predictors and outcome. An individual predictor's P value may test non-significant even though it is important. Confidence intervals for regression coefficients in a multicollinear model may be so high that tiny changes in individual observations have a large effect on the coefficients, sometimes reversing their signs.



##### Variance Inflation Factor (VIF) {-}

Instead of inspecting the correlation matrix, a better way to assess collinearity is to compute the **variance inflation factor (VIF)**. This can easily be calculated in `R` using software packages.

When faced with the problem of collinearity, there are two simple solutions:

1. The first is to drop one of the problematic variables from the regression.

2. The second solution is to combine the collinear variables together into a single predictor.

## Case Study - Marketing Plan

#### Data Overview

The `Advertising` data set consists of the sales of that product in 200 different markets, along with advertising budgets for the product in each of those markets for three different media: `TV`, `radio`, and `newspaper`. The data are displayed in Figure 2.1. 

The plot displays sales, in thousands of units, as a function of `TV`, `radio`, and `newspaper` budgets, in thousands of dollars, for 200 different markets. In each plot we show the simple least squares fit of sales to that variable, as described in Chapter 3. In other words, each blue line represents a simple model that can be used to predict sales using `TV`, `radio`, and newspaper`, respectively. 

![Figure 2.1. The Advertising data set](img/30-Figure2.1-1.png)



#### Important Questions

Suppose that in our role as statistical consultants we are asked to suggest, on the basis of this data, a marketing plan for next year that will result in high product sales. Here are a few important questions that we might seek to address:

1. ***Is there a relationship between advertising sales and budget?***

This question can be answered by fitting a multiple regression model
of sales onto `TV`, `radio`, and `newspaper`, as:

$$
sales = \beta_0 + \beta_1 × TV + \beta_2 × radio + \beta_3 × newspaper + \epsilon.
$$

and testing the hypothesis 
$$
\Large H_0: \beta_{TV} = \beta_{radio} = \beta_{newspaper} = 0
$$
 
F-statistic can be used to determine whether or not we should reject this null hypothesis. In this case, the p-value corresponding to the F-statistic in Table 3.6 is very low, indicating clear evidence of a relationship between advertising and sales.

![Table 3.6. More information about the least squares model for the regression of number of units sold on TV, newspaper, and radio advertising budgets in the Advertising data](img/90-Table3.6-1.png)

2. ***How strong is the relationship?***


First, the RSE estimates the standard deviation of the response from the
population regression line. For the `Advertising` data, the RSE is 1,681 units while the mean value for the response is 14,022, indicating a percentage error of roughly 12%. Second, the $R^2$ statistic records the percentage of variability in the response that is explained by the predictors. The predictors explain almost 90% of the variance in sales. The RSE and $R^2$ statistics are displayed in Table 3.6.

3. ***Which media contribute to sales?***

To answer this question, we can examine the p-values associated with each predictor’s t-statistic. In the multiple linear regression displayed in Table 3.4, the p-values for `TV` and `radio` are low, but the p-value for `newspaper` is not. This suggests that only `TV` and `radio` are related to sales.

![Table 3.4. For the Advertising data, least squares coefficient estimates of the multiple linear regression of number of units sold on radio, TV, and newspaper advertising budgets. ](img/88-Table3.4-1.png)

4. ***How large is the effect of each medium on sales?***

The standard error of $\hat{\beta_j}$ can be used to construct confidence intervals for $\beta_j$. For the `Advertising` data, the 95% confidence intervals are as follows: (0.043, 0.049) for `TV`, (0.172, 0.206) for `radio`, and (−0.013, 0.011) for `newspaper`. 

The confidence intervals for `TV` and `radio` are narrow and far from zero, providing evidence that these media are related to sales. But the interval for `newspaper` includes zero, indicating that the variable is not statistically significant given the values of `TV` and `radio`.

We saw in previous section that collinearity can result in very wide standard errors.

<div class="alert alert-info hints-alert">
  <div class="hints-icon"><i class="fa fa-info"></i></div>
  <div class="hints-container">
   
   ***Could collinearity be the reason that the confidence interval associated with newspaper is so wide?*** 

The VIF scores are 1.005, 1.145, and 1.145 for `TV`,`radio`, and `newspaper`, suggesting no evidence of collinearity.
  </div>
</div>

In order to assess the association of each medium individually on sales, we can perform three separate simple linear regressions. Results are shown in Tables 3.1 and 3.3. 

![Table 3.1. More simple linear regression models for the Advertising data](img/82-Table3.1-1.png)

Coefficients of the least squares model for the regression of number of units sold on `TV` advertising budget. An increase of $1,000 in the `TV` advertising budget is associated with an increase in sales by around 50 units.

![Table 3.3. More simple linear regression models for the Advertising data](img/86-Table3.3-1.png)

Coefficients of the simple linear regression model for number of units sold on:

* **Top:** `radio` advertising budget.

* **Bottom:** `newspaper` advertising budget. 

A $1,000 increase in spending on `radio` advertising is associated with an average increase in sales by around 203 units, while the same increase in spending on `newspaper` advertising is associated with an average increase in sales by around 55 units.


There is evidence of an extremely strong association between `TV` and `sales` and between `radio` and `sales`. There is evidence of a mild association between `newspaper` and `sales`, when the values of `TV` and `radio` are ignored.

5. ***How accurately can we predict future sales?***

The response can be predicted using:

$$
y = \hat{\beta_0} + \hat{\beta_1}x_1 + \hat{\beta_2}x_2 + · · · + \hat{\beta_0}x_p.
$$

The accuracy associated with this estimate depends on whether we wish to predict an individual response, $Y = f(X) + \epsilon$, or the average response, $f(X)$. If the former, we use a prediction interval, and if the latter, we use a confidence interval. Prediction intervals will always be wider than confidence intervals because they account for the uncertainty associated with $\epsilon$, the irreducible error.

6. ***Is the relationship linear?***

In previous section, we saw that residual plots can be used in order to
identify non-linearity. If the relationships are linear, then the residual plots should display no pattern. In the case of the `Advertising` data, we observe a non-linear effect in Figure 3.5, though this effect could also be observed in a residual plot. We also discussed the inclusion of transformations of the predictors in the linear regression model in order to accommodate non-linear relationships.

![Figure 3.5. A linear regression fit to sales using TV and radio as predictors](img/95-Figure3.5-1.png)

From the pattern of the residuals, we can see that there is a pronounced non-linear relationship in the data. The positive residuals (those visible above the surface), tend to lie along the 45-degree line, where `TV` and `radio` budgets are split evenly. The negative residuals (most not visible), tend to lie away from this line, where budgets are more lopsided.

7. ***Is there synergy among the advertising media?***

The standard linear regression model assumes an additive relationship
between the predictors and the response. An additive model is easy to interpret because the effect of each predictor on the response is unrelated to the values of the other predictors. However, the additive assumption may be unrealistic for certain data sets. A small p-value associated with the interaction term indicates the presence of such relationships. 

Figure 3.5 suggested that the `Advertising` data may not be additive. Including an interaction term in the model results in a substantial increase in R2, from around 90% to almost 97%.


## Chapter 3 Lab: Linear Regression


```r
library(MASS)
library(ISLR)
```

### Simple Linear Regression

The Boston data set records `medv` (median house value) for 506 neighborhoods around Boston. We will seek to predict `medv` using 13 predictors such as `rm` (average number of rooms per house), `age` (average age of houses), and `lstat` (percent of households with low socioeconomic status).


```r
fix(Boston)
names(Boston)
#>  [1] "crim"    "zn"      "indus"   "chas"    "nox"     "rm"      "age"    
#>  [8] "dis"     "rad"     "tax"     "ptratio" "black"   "lstat"   "medv"
```

We will start by using the `lm()` function to fit a simple linear regression `lm()` model, with `medv` as the response and `lstat` as the predictor.



```r
lm.fit=lm(medv~lstat,Boston)
lm.fit
#> 
#> Call:
#> lm(formula = medv ~ lstat, data = Boston)
#> 
#> Coefficients:
#> (Intercept)        lstat  
#>       34.55        -0.95
```

For more detailed information, we use `summary(lm.fit)`. This gives us p-values and standard errors for the coefficients, as well as the $R^2$ statistic and F-statistic for the model.


```r
summary(lm.fit)
#> 
#> Call:
#> lm(formula = medv ~ lstat, data = Boston)
#> 
#> Residuals:
#>     Min      1Q  Median      3Q     Max 
#> -15.168  -3.990  -1.318   2.034  24.500 
#> 
#> Coefficients:
#>             Estimate Std. Error t value Pr(>|t|)    
#> (Intercept) 34.55384    0.56263   61.41   <2e-16 ***
#> lstat       -0.95005    0.03873  -24.53   <2e-16 ***
#> ---
#> Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
#> 
#> Residual standard error: 6.216 on 504 degrees of freedom
#> Multiple R-squared:  0.5441,	Adjusted R-squared:  0.5432 
#> F-statistic: 601.6 on 1 and 504 DF,  p-value: < 2.2e-16
```

We can use `names()` function in order to find out what other pieces of information are store in `lm.fit`.


```r
names(lm.fit)
#>  [1] "coefficients"  "residuals"     "effects"       "rank"         
#>  [5] "fitted.values" "assign"        "qr"            "df.residual"  
#>  [9] "xlevels"       "call"          "terms"         "model"
```

Assessing the coefficient of the model:


```r
coef(lm.fit)
#> (Intercept)       lstat 
#>  34.5538409  -0.9500494
```

Assessing the confidence interval for the coefficient estimates:


```r
confint(lm.fit)
#>                 2.5 %     97.5 %
#> (Intercept) 33.448457 35.6592247
#> lstat       -1.026148 -0.8739505
```

To produce confidence interval an prediction intervals for the prediction of `medv` for a given value of `lstat`.


```r
predict(lm.fit,data.frame(lstat=(c(5,10,15))), interval="confidence")
#>        fit      lwr      upr
#> 1 29.80359 29.00741 30.59978
#> 2 25.05335 24.47413 25.63256
#> 3 20.30310 19.73159 20.87461
```


```r
predict(lm.fit,data.frame(lstat=(c(5,10,15))), interval="prediction")
#>        fit       lwr      upr
#> 1 29.80359 17.565675 42.04151
#> 2 25.05335 12.827626 37.27907
#> 3 20.30310  8.077742 32.52846
```


We will now plot `medv` and `lstat` along with the least squares regression line using the `plot()` and `abline()` functions.


```r
attach(Boston)
plot(lstat,medv)
abline(lm.fit)
```

<img src="02-linear-regression_files/figure-html/unnamed-chunk-10-1.png" width="672" />
Next we examine some diagnostic plots, several of which were discussed. Four diagnostic plots are automatically produced by applying the `plot()` function directly to the output from `lm()`.


```r
par(mfrow=c(2,2))
plot(lm.fit)
```

<img src="02-linear-regression_files/figure-html/unnamed-chunk-11-1.png" width="672" />



```r
plot(predict(lm.fit), residuals(lm.fit))
```

<img src="02-linear-regression_files/figure-html/unnamed-chunk-12-1.png" width="672" />
Alternatively, we can compute the residuals from a linear regression fit using the `residuals()` function. The function `rstudent()` will return the studentized residuals, and we can use this function to plot the residuals against the fitted values.


```r
plot(predict(lm.fit), rstudent(lm.fit))
```

<img src="02-linear-regression_files/figure-html/unnamed-chunk-13-1.png" width="672" />

On the basis of the residual plots, there is some evidence of non-linearity. Leverage statistics can be computed for any number of predictors using the `hatvalues()` function.



```r
plot(hatvalues(lm.fit))
```

<img src="02-linear-regression_files/figure-html/unnamed-chunk-14-1.png" width="672" />


The `which.max()` function identifies the index of the largest element of a `which.max()` vector. In this case, it tells us which observation has the largest leverage statistic.


```r
which.max(hatvalues(lm.fit))
#> 375 
#> 375
```


### Multiple Linear Regression

In order to fit a multiple linear regression model using least squares, we again use the `lm()` function. The syntax `lm(y ∼ x1 + x2 + x3)` is used to fit a model with three predictors, `x1`, `x2`, and `x3.` The `summary()` function now outputs the regression coefficients for all the predictors.


```r
lm.fit=lm(medv~lstat+age,data=Boston)
summary(lm.fit)
#> 
#> Call:
#> lm(formula = medv ~ lstat + age, data = Boston)
#> 
#> Residuals:
#>     Min      1Q  Median      3Q     Max 
#> -15.981  -3.978  -1.283   1.968  23.158 
#> 
#> Coefficients:
#>             Estimate Std. Error t value Pr(>|t|)    
#> (Intercept) 33.22276    0.73085  45.458  < 2e-16 ***
#> lstat       -1.03207    0.04819 -21.416  < 2e-16 ***
#> age          0.03454    0.01223   2.826  0.00491 ** 
#> ---
#> Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
#> 
#> Residual standard error: 6.173 on 503 degrees of freedom
#> Multiple R-squared:  0.5513,	Adjusted R-squared:  0.5495 
#> F-statistic:   309 on 2 and 503 DF,  p-value: < 2.2e-16
```

To perform a regression using all of the predictors, we can use:

```r
lm.fit <- lm(medv ~., data = Boston)
summary(lm.fit)
#> 
#> Call:
#> lm(formula = medv ~ ., data = Boston)
#> 
#> Residuals:
#>     Min      1Q  Median      3Q     Max 
#> -15.595  -2.730  -0.518   1.777  26.199 
#> 
#> Coefficients:
#>               Estimate Std. Error t value Pr(>|t|)    
#> (Intercept)  3.646e+01  5.103e+00   7.144 3.28e-12 ***
#> crim        -1.080e-01  3.286e-02  -3.287 0.001087 ** 
#> zn           4.642e-02  1.373e-02   3.382 0.000778 ***
#> indus        2.056e-02  6.150e-02   0.334 0.738288    
#> chas         2.687e+00  8.616e-01   3.118 0.001925 ** 
#> nox         -1.777e+01  3.820e+00  -4.651 4.25e-06 ***
#> rm           3.810e+00  4.179e-01   9.116  < 2e-16 ***
#> age          6.922e-04  1.321e-02   0.052 0.958229    
#> dis         -1.476e+00  1.995e-01  -7.398 6.01e-13 ***
#> rad          3.060e-01  6.635e-02   4.613 5.07e-06 ***
#> tax         -1.233e-02  3.760e-03  -3.280 0.001112 ** 
#> ptratio     -9.527e-01  1.308e-01  -7.283 1.31e-12 ***
#> black        9.312e-03  2.686e-03   3.467 0.000573 ***
#> lstat       -5.248e-01  5.072e-02 -10.347  < 2e-16 ***
#> ---
#> Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
#> 
#> Residual standard error: 4.745 on 492 degrees of freedom
#> Multiple R-squared:  0.7406,	Adjusted R-squared:  0.7338 
#> F-statistic: 108.1 on 13 and 492 DF,  p-value: < 2.2e-16
```

To perform a regression using all of the variables but one, we can use:

```r
lm.fit1 <- lm(medv ~. -age, data = Boston)
summary(lm.fit1)
#> 
#> Call:
#> lm(formula = medv ~ . - age, data = Boston)
#> 
#> Residuals:
#>      Min       1Q   Median       3Q      Max 
#> -15.6054  -2.7313  -0.5188   1.7601  26.2243 
#> 
#> Coefficients:
#>               Estimate Std. Error t value Pr(>|t|)    
#> (Intercept)  36.436927   5.080119   7.172 2.72e-12 ***
#> crim         -0.108006   0.032832  -3.290 0.001075 ** 
#> zn            0.046334   0.013613   3.404 0.000719 ***
#> indus         0.020562   0.061433   0.335 0.737989    
#> chas          2.689026   0.859598   3.128 0.001863 ** 
#> nox         -17.713540   3.679308  -4.814 1.97e-06 ***
#> rm            3.814394   0.408480   9.338  < 2e-16 ***
#> dis          -1.478612   0.190611  -7.757 5.03e-14 ***
#> rad           0.305786   0.066089   4.627 4.75e-06 ***
#> tax          -0.012329   0.003755  -3.283 0.001099 ** 
#> ptratio      -0.952211   0.130294  -7.308 1.10e-12 ***
#> black         0.009321   0.002678   3.481 0.000544 ***
#> lstat        -0.523852   0.047625 -10.999  < 2e-16 ***
#> ---
#> Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
#> 
#> Residual standard error: 4.74 on 493 degrees of freedom
#> Multiple R-squared:  0.7406,	Adjusted R-squared:  0.7343 
#> F-statistic: 117.3 on 12 and 493 DF,  p-value: < 2.2e-16
```
or Alternatively, the `update()` function can be used:

```r
lm.fit1 <- update(lm.fit,~. -age)
summary(lm.fit1)
#> 
#> Call:
#> lm(formula = medv ~ crim + zn + indus + chas + nox + rm + dis + 
#>     rad + tax + ptratio + black + lstat, data = Boston)
#> 
#> Residuals:
#>      Min       1Q   Median       3Q      Max 
#> -15.6054  -2.7313  -0.5188   1.7601  26.2243 
#> 
#> Coefficients:
#>               Estimate Std. Error t value Pr(>|t|)    
#> (Intercept)  36.436927   5.080119   7.172 2.72e-12 ***
#> crim         -0.108006   0.032832  -3.290 0.001075 ** 
#> zn            0.046334   0.013613   3.404 0.000719 ***
#> indus         0.020562   0.061433   0.335 0.737989    
#> chas          2.689026   0.859598   3.128 0.001863 ** 
#> nox         -17.713540   3.679308  -4.814 1.97e-06 ***
#> rm            3.814394   0.408480   9.338  < 2e-16 ***
#> dis          -1.478612   0.190611  -7.757 5.03e-14 ***
#> rad           0.305786   0.066089   4.627 4.75e-06 ***
#> tax          -0.012329   0.003755  -3.283 0.001099 ** 
#> ptratio      -0.952211   0.130294  -7.308 1.10e-12 ***
#> black         0.009321   0.002678   3.481 0.000544 ***
#> lstat        -0.523852   0.047625 -10.999  < 2e-16 ***
#> ---
#> Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
#> 
#> Residual standard error: 4.74 on 493 degrees of freedom
#> Multiple R-squared:  0.7406,	Adjusted R-squared:  0.7343 
#> F-statistic: 117.3 on 12 and 493 DF,  p-value: < 2.2e-16
```

### Interaction Terms


```r
summary(lm(medv~lstat*age,data=Boston))
#> 
#> Call:
#> lm(formula = medv ~ lstat * age, data = Boston)
#> 
#> Residuals:
#>     Min      1Q  Median      3Q     Max 
#> -15.806  -4.045  -1.333   2.085  27.552 
#> 
#> Coefficients:
#>               Estimate Std. Error t value Pr(>|t|)    
#> (Intercept) 36.0885359  1.4698355  24.553  < 2e-16 ***
#> lstat       -1.3921168  0.1674555  -8.313 8.78e-16 ***
#> age         -0.0007209  0.0198792  -0.036   0.9711    
#> lstat:age    0.0041560  0.0018518   2.244   0.0252 *  
#> ---
#> Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
#> 
#> Residual standard error: 6.149 on 502 degrees of freedom
#> Multiple R-squared:  0.5557,	Adjusted R-squared:  0.5531 
#> F-statistic: 209.3 on 3 and 502 DF,  p-value: < 2.2e-16
```


### Non-linear Transformations of the Predictors

The `lm()` function can also accommodate non-linear transformations of the predictors. For instance, given a predictor $X$, we can create a predictor $X^2$ using `I(X^2)`. We now perform a regression of `medv` onto `lstat` and `lstat2`.

```r
lm.fit2=lm(medv~lstat+I(lstat^2))
summary(lm.fit2)
#> 
#> Call:
#> lm(formula = medv ~ lstat + I(lstat^2))
#> 
#> Residuals:
#>      Min       1Q   Median       3Q      Max 
#> -15.2834  -3.8313  -0.5295   2.3095  25.4148 
#> 
#> Coefficients:
#>              Estimate Std. Error t value Pr(>|t|)    
#> (Intercept) 42.862007   0.872084   49.15   <2e-16 ***
#> lstat       -2.332821   0.123803  -18.84   <2e-16 ***
#> I(lstat^2)   0.043547   0.003745   11.63   <2e-16 ***
#> ---
#> Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
#> 
#> Residual standard error: 5.524 on 503 degrees of freedom
#> Multiple R-squared:  0.6407,	Adjusted R-squared:  0.6393 
#> F-statistic: 448.5 on 2 and 503 DF,  p-value: < 2.2e-16
```

We use the `anova()` function to further quantify the extent to which the quadratic fit is superior to the linear fit. 

```r
lm.fit=lm(medv~lstat)
anova(lm.fit,lm.fit2)
#> Analysis of Variance Table
#> 
#> Model 1: medv ~ lstat
#> Model 2: medv ~ lstat + I(lstat^2)
#>   Res.Df   RSS Df Sum of Sq     F    Pr(>F)    
#> 1    504 19472                                 
#> 2    503 15347  1    4125.1 135.2 < 2.2e-16 ***
#> ---
#> Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
```
Here **Model 1** represents the linear submodel containing only one predictor, `lstat`, while **Model 2** corresponds to the larger quadratic model that has two predictors, `lstat` and `lstat2`. 

The `anova()` function performs a hypothesis test comparing the two models. The null hypothesis is that the two models fit the data equally well, and the alternative hypothesis is that the full model is superior. Here the F-statistic is 135 and the associated p-value is virtually zero. This provides very clear evidence that the model containing the predictors `lstat` and `lstat2` is far superior to the model that only contains the predictor `lstat`. This is not surprising, since earlier we saw evidence for non-linearity in the relationship between `medv` and `lstat`. If we type


```r
par(mfrow=c(2,2))
plot(lm.fit2)
```

<img src="02-linear-regression_files/figure-html/unnamed-chunk-23-1.png" width="672" />

then we see that when the `lstat2` term is included in the model, there is little discernible pattern in the residuals.

A better approach involves using the `poly()` function to create the polynomial within `lm()`. For example, the following command produces a fifth-order polynomial fit:


```r
lm.fit5=lm(medv~poly(lstat,5))
summary(lm.fit5)
#> 
#> Call:
#> lm(formula = medv ~ poly(lstat, 5))
#> 
#> Residuals:
#>      Min       1Q   Median       3Q      Max 
#> -13.5433  -3.1039  -0.7052   2.0844  27.1153 
#> 
#> Coefficients:
#>                  Estimate Std. Error t value Pr(>|t|)    
#> (Intercept)       22.5328     0.2318  97.197  < 2e-16 ***
#> poly(lstat, 5)1 -152.4595     5.2148 -29.236  < 2e-16 ***
#> poly(lstat, 5)2   64.2272     5.2148  12.316  < 2e-16 ***
#> poly(lstat, 5)3  -27.0511     5.2148  -5.187 3.10e-07 ***
#> poly(lstat, 5)4   25.4517     5.2148   4.881 1.42e-06 ***
#> poly(lstat, 5)5  -19.2524     5.2148  -3.692 0.000247 ***
#> ---
#> Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
#> 
#> Residual standard error: 5.215 on 500 degrees of freedom
#> Multiple R-squared:  0.6817,	Adjusted R-squared:  0.6785 
#> F-statistic: 214.2 on 5 and 500 DF,  p-value: < 2.2e-16
```
This suggests that including additional polynomial terms, up to fifth order, leads to an improvement in the model fit! However, further investigation of the data reveals that no polynomial terms beyond fifth order have significant p-values in a regression fit.

Of course, we are in no way restricted to using polynomial transformations of the predictors. Here we try a log transformation.


```r
summary(lm(medv~log(rm),data=Boston))
#> 
#> Call:
#> lm(formula = medv ~ log(rm), data = Boston)
#> 
#> Residuals:
#>     Min      1Q  Median      3Q     Max 
#> -19.487  -2.875  -0.104   2.837  39.816 
#> 
#> Coefficients:
#>             Estimate Std. Error t value Pr(>|t|)    
#> (Intercept)  -76.488      5.028  -15.21   <2e-16 ***
#> log(rm)       54.055      2.739   19.73   <2e-16 ***
#> ---
#> Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
#> 
#> Residual standard error: 6.915 on 504 degrees of freedom
#> Multiple R-squared:  0.4358,	Adjusted R-squared:  0.4347 
#> F-statistic: 389.3 on 1 and 504 DF,  p-value: < 2.2e-16
```


### Qualitative Predictors

We will now examine the `Carseats` data, which is part of the `ISLR2` library. We will attempt to predict Sales (child car seat sales) in 400 locations based on a number of predictors.


```r
head(Carseats)
#>   Sales CompPrice Income Advertising Population Price ShelveLoc Age Education
#> 1  9.50       138     73          11        276   120       Bad  42        17
#> 2 11.22       111     48          16        260    83      Good  65        10
#> 3 10.06       113     35          10        269    80    Medium  59        12
#> 4  7.40       117    100           4        466    97    Medium  55        14
#> 5  4.15       141     64           3        340   128       Bad  38        13
#> 6 10.81       124    113          13        501    72       Bad  78        16
#>   Urban  US
#> 1   Yes Yes
#> 2   Yes Yes
#> 3   Yes Yes
#> 4   Yes Yes
#> 5   Yes  No
#> 6    No Yes
```

The `Carseats` data includes qualitative predictors such as `Shelveloc`, an indicator
of the quality of the shelving location—that is, the space within a store in which the car seat is displayed—at each location. 

The predictor Shelveloc takes on three possible values: *Bad*, *Medium*, and *Good*. Given a qualitative variable such as `Shelveloc`, R generates dummy variables automatically. Below we fit a multiple regression model that includes some interaction terms.


```r
lm.fit=lm(Sales~.+Income:Advertising+Price:Age,data=Carseats)
summary(lm.fit)
#> 
#> Call:
#> lm(formula = Sales ~ . + Income:Advertising + Price:Age, data = Carseats)
#> 
#> Residuals:
#>     Min      1Q  Median      3Q     Max 
#> -2.9208 -0.7503  0.0177  0.6754  3.3413 
#> 
#> Coefficients:
#>                      Estimate Std. Error t value Pr(>|t|)    
#> (Intercept)         6.5755654  1.0087470   6.519 2.22e-10 ***
#> CompPrice           0.0929371  0.0041183  22.567  < 2e-16 ***
#> Income              0.0108940  0.0026044   4.183 3.57e-05 ***
#> Advertising         0.0702462  0.0226091   3.107 0.002030 ** 
#> Population          0.0001592  0.0003679   0.433 0.665330    
#> Price              -0.1008064  0.0074399 -13.549  < 2e-16 ***
#> ShelveLocGood       4.8486762  0.1528378  31.724  < 2e-16 ***
#> ShelveLocMedium     1.9532620  0.1257682  15.531  < 2e-16 ***
#> Age                -0.0579466  0.0159506  -3.633 0.000318 ***
#> Education          -0.0208525  0.0196131  -1.063 0.288361    
#> UrbanYes            0.1401597  0.1124019   1.247 0.213171    
#> USYes              -0.1575571  0.1489234  -1.058 0.290729    
#> Income:Advertising  0.0007510  0.0002784   2.698 0.007290 ** 
#> Price:Age           0.0001068  0.0001333   0.801 0.423812    
#> ---
#> Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
#> 
#> Residual standard error: 1.011 on 386 degrees of freedom
#> Multiple R-squared:  0.8761,	Adjusted R-squared:  0.8719 
#> F-statistic:   210 on 13 and 386 DF,  p-value: < 2.2e-16
```

The contrasts() function returns the coding that R uses for the dummy `contrasts()` variables.

```r
attach(Carseats)
contrasts(ShelveLoc)
#>        Good Medium
#> Bad       0      0
#> Good      1      0
#> Medium    0      1
```
R has created a `ShelveLocGood` dummy variable that takes on a value of 1 if the shelving location is good, and 0 otherwise. It has also created a `ShelveLocMedium` dummy variable that equals 1 if the shelving location is medium, and 0 otherwise. A bad shelving location corresponds to a zero for each of the two dummy variables. 

The fact that the coefficient for `ShelveLocGood` in the regression output is positive indicates that a good shelving location is associated with high sales (relative to a bad location). And `ShelveLocMedium` has a smaller positive coefficient, indicating that a
medium shelving location is associated with higher sales than a bad shelving
location but lower sales than a good shelving location.

### Writing Functions

In order to write our own function, for instance, below we provide a simple function that reads in the `ISLR2` and `MASS` libraries, called
`LoadLibraries()`. 

```r
#create the function
LoadLibraries=function(){
 library(ISLR)
 library(MASS)
 print("The libraries have been loaded.")
}

# execute the function
LoadLibraries()
#> [1] "The libraries have been loaded."
```

## Exercises (Applied)

### Question 1 {-}

This question involves the use of simple linear regression on the `Auto` data set.

#### (a) Use the `lm()` function to perform a simple linear regression with `mpg` as the response and `horsepower` as the predictor. Use the `summary()` function to print the results. Comment on the output. {-}


```r
mpg.fit <- lm(mpg ~ horsepower, data = Auto)
summary(mpg.fit)
#> 
#> Call:
#> lm(formula = mpg ~ horsepower, data = Auto)
#> 
#> Residuals:
#>      Min       1Q   Median       3Q      Max 
#> -13.5710  -3.2592  -0.3435   2.7630  16.9240 
#> 
#> Coefficients:
#>              Estimate Std. Error t value Pr(>|t|)    
#> (Intercept) 39.935861   0.717499   55.66   <2e-16 ***
#> horsepower  -0.157845   0.006446  -24.49   <2e-16 ***
#> ---
#> Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
#> 
#> Residual standard error: 4.906 on 390 degrees of freedom
#> Multiple R-squared:  0.6059,	Adjusted R-squared:  0.6049 
#> F-statistic: 599.7 on 1 and 390 DF,  p-value: < 2.2e-16
```

In order to interpret the result, a set of following questions are set up to better investigate the model:

##### i. *Is there a relationship between the predictor and the response?* {-}

This question can be answered by fitting the simple linear regression model of `mpg` on `horsepower` and testing the null hypothesis:

$$
H_0: \beta_j = 0
$$ 

The p-value for the `horsepower` variable is very small (<<0.05), so there is strong evidence to believe that `horsepower` is associated with `mpg`. Therefore, there is a relationship between the predictor and response.

##### ii. *How strong is the relationship between the predictor and the response?* {-}

There are 2 measures of model accuracy to evaluate the degree of relationship between the predictor and the response, which are: **RSE** and $R^2$ **statistic**.

For the `Auto` data, the RSE is:


```r
summary(mpg.fit)$sigma
#> [1] 4.905757
```
The RSE is different (good or bad) in the sense that it takes on the units of y, but we can divide this by mean y to get the **percentage error**:


```r
summary(mpg.fit)$sigma/mean(Auto$mpg)
#> [1] 0.2092371
```
So the percentage error = 20.92%.

Second, the $R^2$ of the linear model, which can be thought of as “the percentage of variability in the response that is explained by the predictor”, is given by:


```r
summary(mpg.fit)$r.squared
#> [1] 0.6059483
```
So the `horsepower` explains 60.59% of the variance in `mpg`.

##### iii. *Is the relationship between the predictor and the response positive or negative?* {-}


```r
coefficients(mpg.fit)
#> (Intercept)  horsepower 
#>  39.9358610  -0.1578447
```

The relationship is negative between `mpg` and `horsepower` as the coefficient estimate is -0.1578447.

##### iv. *What is the predicted `mpg` associated with a `horsepower` of 98? What are the associated 95% confidence and prediction intervals?* {-}

The confidence interval:

```r
predict(mpg.fit, data.frame(horsepower = 98), interval = "confidence", level = 0.95)
#>        fit      lwr      upr
#> 1 24.46708 23.97308 24.96108
```
The prediction interval:

```r
predict(mpg.fit, data.frame(horsepower = 98), interval = "prediction", level = 0.95)
#>        fit     lwr      upr
#> 1 24.46708 14.8094 34.12476
```
The prediction interval is wider than the confidence interval as we would expect.

#### (b) Plot the response and the predictor. Use the `abline()` function to display the least squares regression line. {-}


```r
plot(Auto$horsepower,Auto$mpg,xlab = "horsepower", ylab = "mpg",main = "Scatterplot of mpg vs. horsepower")
abline(mpg.fit,col="red")
```

<img src="02-linear-regression_files/figure-html/unnamed-chunk-37-1.png" width="672" />

#### (c) Use the `plot()` function to produce diagnostic plots of the least squares regression fit. Comment on any problems you see with the fit. {-}


```r
par(mfrow=c(2,2))
plot(mpg.fit)
```

<img src="02-linear-regression_files/figure-html/unnamed-chunk-38-1.png" width="672" />

The diagnostic plots show residuals in four different ways. Let’s take a look at the first type of plot:

#####  **(i) Residuals vs Fitted** {-}

This plot shows if residuals have non-linear patterns.

In this case, The plot of residuals versus fitted values indicates the presence of non linearity in the data.

##### **(ii) Normal Q-Q** {-}

This plot shows if residuals are normally distributed. Do residuals follow a straight line well or do they deviate severely? It’s good to see that residuals in this model are lined well on the straight dashed line.


##### **(iii) Scale-Location** {-}

This plot show how you can check the assumption of equal variance (homoscedasticity).

In this case, there also appears to be non-constant variance in the error terms (heteroscedasticity), but this could be corrected to an extent when trying a quadratic fit. If not, transformations such as $log(y)$ or $\sqrt{y}$ can shrink larger responses by a greater amount and reduce this issue.

##### **(iv) Residuals vs Leverage** {-}

This plot helps us to find influential cases (i.e., subjects) if any. 

The plot of standardized residuals versus leverage indicates the presence of a few outliers and a few high leverage points.


### Question 2 {-}

This question involves the use of multiple linear regression on the `Auto` data set.

#### (a) Produce a scatterplot matrix which includes all of the variables in the data set. {-}


```r
pairs(Auto)
```

<img src="02-linear-regression_files/figure-html/unnamed-chunk-39-1.png" width="672" />

#### (b) Compute the matrix of correlations between the variables using the function `cor()`. You will need to exclude the “name” variable, which is qualitative. {-}


```r
names(Auto)
#> [1] "mpg"          "cylinders"    "displacement" "horsepower"   "weight"      
#> [6] "acceleration" "year"         "origin"       "name"
```


```r
cor(Auto[-9])
#>                     mpg  cylinders displacement horsepower     weight
#> mpg           1.0000000 -0.7776175   -0.8051269 -0.7784268 -0.8322442
#> cylinders    -0.7776175  1.0000000    0.9508233  0.8429834  0.8975273
#> displacement -0.8051269  0.9508233    1.0000000  0.8972570  0.9329944
#> horsepower   -0.7784268  0.8429834    0.8972570  1.0000000  0.8645377
#> weight       -0.8322442  0.8975273    0.9329944  0.8645377  1.0000000
#> acceleration  0.4233285 -0.5046834   -0.5438005 -0.6891955 -0.4168392
#> year          0.5805410 -0.3456474   -0.3698552 -0.4163615 -0.3091199
#> origin        0.5652088 -0.5689316   -0.6145351 -0.4551715 -0.5850054
#>              acceleration       year     origin
#> mpg             0.4233285  0.5805410  0.5652088
#> cylinders      -0.5046834 -0.3456474 -0.5689316
#> displacement   -0.5438005 -0.3698552 -0.6145351
#> horsepower     -0.6891955 -0.4163615 -0.4551715
#> weight         -0.4168392 -0.3091199 -0.5850054
#> acceleration    1.0000000  0.2903161  0.2127458
#> year            0.2903161  1.0000000  0.1815277
#> origin          0.2127458  0.1815277  1.0000000
```

#### (c) Use the `lm()` function to perform a multiple linear regression with `mpg` as the response and all other variables except “name” as the predictors. Use the `summary()` function to print the results. Comment on the output. {-}


```r
mpg.fit2 <- lm(mpg ~. -name, data=Auto)
summary(mpg.fit2)
#> 
#> Call:
#> lm(formula = mpg ~ . - name, data = Auto)
#> 
#> Residuals:
#>     Min      1Q  Median      3Q     Max 
#> -9.5903 -2.1565 -0.1169  1.8690 13.0604 
#> 
#> Coefficients:
#>                Estimate Std. Error t value Pr(>|t|)    
#> (Intercept)  -17.218435   4.644294  -3.707  0.00024 ***
#> cylinders     -0.493376   0.323282  -1.526  0.12780    
#> displacement   0.019896   0.007515   2.647  0.00844 ** 
#> horsepower    -0.016951   0.013787  -1.230  0.21963    
#> weight        -0.006474   0.000652  -9.929  < 2e-16 ***
#> acceleration   0.080576   0.098845   0.815  0.41548    
#> year           0.750773   0.050973  14.729  < 2e-16 ***
#> origin         1.426141   0.278136   5.127 4.67e-07 ***
#> ---
#> Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
#> 
#> Residual standard error: 3.328 on 384 degrees of freedom
#> Multiple R-squared:  0.8215,	Adjusted R-squared:  0.8182 
#> F-statistic: 252.4 on 7 and 384 DF,  p-value: < 2.2e-16
```

##### i. Is there a relationship between the predictors and the response? {-}

 We answer this question by performing an F-test, where we test the null hypothesis that all of the regression coefficients are zero:
 
$$
H_0:\beta_1=\beta_2=...=\beta_p=0\\

H_a: at \;least \;one \;\beta_j\neq0
$$

The p-value is given at the bottom of the model summary (`p-value: < 2.2e-16`), so it’s clear that the probability of the null hypothesis being true (given our data) is practically zero.

We reject the null hypothesis (and hence conclude that there is a relationship between the predictors and `mpg`).

##### ii. Which predictors appear to have a statistically significant relationship to the response? {-}

We can answer this question by checking the p-values associated with each predictor’s t-statistic. We may conclude that all predictors are statistically significant except `cylinders`, `horsepower` and `acceleration`.


##### iii. What does the coefficient for the `year` variable suggest? {-}


```r
coef(mpg.fit2)[7]
#>      year 
#> 0.7507727
```


The coefficient ot the `year` variable suggests that the average effect of an increase of 1 year is an increase of 0.7507727 in `mpg` (all other predictors remaining constant). In other words, cars become more fuel efficient every year by almost 1 mpg / year.

#### (d) Use the `plot()` function to produce diagnostic plots of the linear regression fit. Comment on any problems you see with the fit. {-}


```r
par(mfrow=c(2,2))
plot(mpg.fit2)
```

<img src="02-linear-regression_files/figure-html/unnamed-chunk-44-1.png" width="672" />

###### **(i) Residuals vs Fitted** {-}

This plot shows if residuals have non-linear patterns.

In this case, The plot of residuals versus fitted values indicates the presence of mild non linearity in the data.

###### **(ii) Normal Q-Q** {-}

This plot shows if residuals are normally distributed. Do residuals follow a straight line well or do they deviate severely? It’s good to see that residuals in this model are lined well on the straight dashed line.


###### **(iii) Scale-Location** {-}

This plot show how you can check the assumption of equal variance (homoscedasticity).

In this case, there also appears to be non-constant variance in the error terms (heteroscedasticity), but this could be corrected to an extent when trying a quadratic fit. If not, transformations such as $log(y)$ or $\sqrt{y}$ can shrink larger responses by a greater amount and reduce this issue.

###### **(iv) Residuals vs Leverage** {-}

This plot helps us to find influential cases (i.e., subjects) if any. 

We can see some evidence of observations (e.g. 14) with both high leverage and high residual statistics, that may be disproportionately influencing the regression predictions.

#### (e) Use the `*` and : symbols to fit linear regression models with interaction effects. Do any interactions appear to be statistically significant?

Since we have relatively few predictors, we can test all interactions with `mpg ~ . * .` in the call to `lm()`:


```r
mpg.fit3 <- lm(mpg ~.* ., data=Auto[,-9]) 
summary(mpg.fit3)
#> 
#> Call:
#> lm(formula = mpg ~ . * ., data = Auto[, -9])
#> 
#> Residuals:
#>     Min      1Q  Median      3Q     Max 
#> -7.6303 -1.4481  0.0596  1.2739 11.1386 
#> 
#> Coefficients:
#>                             Estimate Std. Error t value Pr(>|t|)   
#> (Intercept)                3.548e+01  5.314e+01   0.668  0.50475   
#> cylinders                  6.989e+00  8.248e+00   0.847  0.39738   
#> displacement              -4.785e-01  1.894e-01  -2.527  0.01192 * 
#> horsepower                 5.034e-01  3.470e-01   1.451  0.14769   
#> weight                     4.133e-03  1.759e-02   0.235  0.81442   
#> acceleration              -5.859e+00  2.174e+00  -2.696  0.00735 **
#> year                       6.974e-01  6.097e-01   1.144  0.25340   
#> origin                    -2.090e+01  7.097e+00  -2.944  0.00345 **
#> cylinders:displacement    -3.383e-03  6.455e-03  -0.524  0.60051   
#> cylinders:horsepower       1.161e-02  2.420e-02   0.480  0.63157   
#> cylinders:weight           3.575e-04  8.955e-04   0.399  0.69000   
#> cylinders:acceleration     2.779e-01  1.664e-01   1.670  0.09584 . 
#> cylinders:year            -1.741e-01  9.714e-02  -1.793  0.07389 . 
#> cylinders:origin           4.022e-01  4.926e-01   0.816  0.41482   
#> displacement:horsepower   -8.491e-05  2.885e-04  -0.294  0.76867   
#> displacement:weight        2.472e-05  1.470e-05   1.682  0.09342 . 
#> displacement:acceleration -3.479e-03  3.342e-03  -1.041  0.29853   
#> displacement:year          5.934e-03  2.391e-03   2.482  0.01352 * 
#> displacement:origin        2.398e-02  1.947e-02   1.232  0.21875   
#> horsepower:weight         -1.968e-05  2.924e-05  -0.673  0.50124   
#> horsepower:acceleration   -7.213e-03  3.719e-03  -1.939  0.05325 . 
#> horsepower:year           -5.838e-03  3.938e-03  -1.482  0.13916   
#> horsepower:origin          2.233e-03  2.930e-02   0.076  0.93931   
#> weight:acceleration        2.346e-04  2.289e-04   1.025  0.30596   
#> weight:year               -2.245e-04  2.127e-04  -1.056  0.29182   
#> weight:origin             -5.789e-04  1.591e-03  -0.364  0.71623   
#> acceleration:year          5.562e-02  2.558e-02   2.174  0.03033 * 
#> acceleration:origin        4.583e-01  1.567e-01   2.926  0.00365 **
#> year:origin                1.393e-01  7.399e-02   1.882  0.06062 . 
#> ---
#> Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
#> 
#> Residual standard error: 2.695 on 363 degrees of freedom
#> Multiple R-squared:  0.8893,	Adjusted R-squared:  0.8808 
#> F-statistic: 104.2 on 28 and 363 DF,  p-value: < 2.2e-16
```
We can see the significant terms (at the 0.05 level) are those with at least one asterisk (*). It is probably unreasonable to use a significance level of 0.05 here, as we are testing such a large number of hypothesis, perhaps a lower threshold for significance (or a p-value correction using the p.adjust() function) would be appropriate.

Using the standard threshold of 0.05, the significant interaction terms are given by:
* `displacement:year`
* `acceleration:year`
* `acceleration:origin`

#### Try a few different transformations of the variables, such as $log(X)$, $\sqrt{X}$, $X^2$. Comment on your findings. {-}


```r
par(mfrow = c(2, 2))
plot(log(Auto$horsepower), Auto$mpg, xlab= "log(horsepower)", ylab = "mpg", main="Log Tranformation")
plot(sqrt(Auto$horsepower), Auto$mpg, xlab= "sqrt(horsepower)", ylab = "mpg", main="Square Root Transformation")
plot((Auto$horsepower)^2, Auto$mpg, xlab= "horsepower", ylab = "mpg", main="X^2 Transformation")
```

<img src="02-linear-regression_files/figure-html/unnamed-chunk-46-1.png" width="672" />

We limit ourselves to examining `horsepower` as sole predictor. It seems that the log transformation gives the most linear looking plot.
