# Other Considerations in the Regression Model

## Potential Problems

When we fit a linear regression model, many problems can occur, to name a few:

* *Non-linearity of the response-predictor relationships.*
* *Correlation of error terms.*
* *Non-constant variance of error terms.*
* *Outliers.*
* *High-leverage points.*
* *Collinearity.*

### Non-linearity of the Data

The first assumption of Linear Regression is that relations between the independent and dependent variables must be linear.

Although this assumption is not always cited in the literature, it is logical and important to check for it. After all, if your relationships are not linear, you should not use a linear model, but rather a non-linear model of which plenty exist.

We can check for linear relationships easily by making a scatter plot for each independent variable with the dependent variable as in Figure 3.9.

![Figure 3.9. Plots of residuals versus predicted (or fitted) values for the Auto data set](img/107-Figure3.9-1.png)

In each plot, the red line is a smooth fit to the residuals, intended to make it easier to identify a trend. 

* **Left:** A linear regression of `mpg` on horsepower. A strong pattern in the residuals indicates non-linearity in the data. 
* **Right:** A linear regression of `mpg` on `horsepower` and `horsepower2`. There is little pattern in the residuals.

