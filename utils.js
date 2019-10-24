const { By } = require('selenium-webdriver')

const getElementById = async (context,elemId) => {
    return context.findElement(By.id(elemId))
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

const getElementByTagName = async(context,tagName) => {
    return context.findElement(By.tagName(tagName))
}

const getElementsByTagName = async(context,tagName) => {
    return context.findElements(By.tagName(tagName))
}

const getElementByLinkText = async(context,link) => {
    return context.findElement(By.linkText(link))
}

const getElementsByLinkText = async(context,link) => {
    return context.findElements(By.linkText(link))
}

const getCurrentUrl  = async (context) => {
    return context.getCurrentUrl()
}

module.exports = {
    getElementById,
    getElementsById,
    getElementByClassName,
    getElementsByClassName,
    getElementByTagName,
    getElementsByTagName,
    getElementByLinkText,
    getElementsByLinkText,
    getBaseUrl
}
