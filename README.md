# WebdriverIO JUnit Reporter Fix  

This repository verifies the fix for the WebdriverIO JUnit reporter bug ([#8970](https://github.com/webdriverio/webdriverio/issues/8970)), where large log outputs previously caused malformed XML. WebdriverIO **9.x** resolves this issue. This project tests the fix by generating **10,000+ logs** and ensuring the XML remains valid.  

## Fix Summary  
- **Bug [#8970](https://github.com/webdriverio/webdriverio/issues/8970)**: JUnit reporter previously failed with large logs (1,500+ lines).  
- **WebdriverIO 9.x** now correctly generates valid XML with high log volumes.  

## Setup  

### Requirements  
- **Node.js**
- **npm**  

### Installation  
```bash
cd webdriverio-reformed-xml
npm install
```  

### Running Tests  
```bash
npm test
```  
Runs **`logs.test.js`**, generating 10,000 logs and saving results to `junit-reports/results.xml`.  

### Analyzing the XML  
```bash
npm run analyze
```  
Checks if the XML is valid and logs are recorded correctly.  
