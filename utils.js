const { By } = require('selenium-webdriver');

const getElementById = async (context,elemId) => {
    return context.findElement(By.id(elemId));
}

const getElementsById = async(context,elemId) => {
    return context.findElements(By.id(elemId))
}

const getElementByClassName = async(context,className) => {
    return context.findElement(By.className(className))
}

const getElementsByClassName = async(context,className) => {
    return context.findElements(By.className(className))
}

const getBaseUrl  = async (context) => {
    return context.getCurrentUrl();
}

module.exports = {
    getElementById,
    getElementsById,
    getElementByClassName,
    getElementsByClassName,
    getBaseUrl
}