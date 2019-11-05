const { By } = require('selenium-webdriver')

const getElementById = async (context,elemId) => {
    return context.findElement(By.id(elemId))
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

const getElementByPartialLinkText = async(context,linkText)=>{
    return context.findElement(By.partialLinkText(linkText))
}

const getElementsByPartialLinkText = async(context,linkText)=>{
    return context.findElements(By.partialLinkText(linkText))
}

const getElementByName = async(context,name)=>{
    return context.findElement(By.name(name))
}

const getElementsByName = async(context,name)=>{
    return context.findElements(By.name(name))
}

const getElementByXPath = async(context,xpath)=>{
    return context.findElement(By.xpath(xpath))
}

const getElementsByXPath = async(context,xpath)=>{
    return context.findElements(By.xpath(xpath))
}

const getCurrentUrl  = async(context)=>{
    return context.getCurrentUrl()
}

const getCurrentTitle = async(context)=>{
    return context.getTitle()
}

const getErrorLogs = async(context)=>{
    return context.manage().logs().get("browser")
}

const explicitWait = async(context,duration)=>{
    return context.sleep(duration)
}

module.exports = {
    getElementById,
    getElementByClassName,
    getElementsByClassName,
    getElementByTagName,
    getElementsByTagName,
    getElementByLinkText,
    getElementsByLinkText,
    getElementByPartialLinkText,
    getElementsByPartialLinkText,
    getElementByName,
    getElementsByName,
    getElementByXPath,
    getElementsByXPath,
    getCurrentUrl,
    getCurrentTitle,
    getErrorLogs,
    explicitWait
}
