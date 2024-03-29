// import React from 'react';
import styless from './CustomButton.module.css'
const CssModulesButton = () => {
  return (
    <>
    <button className={`${styless.cssModulesButtonStyles}`}>CSS MODULES PRO</button>
    <button className={styless['cssModules-ButtonStyles2']}>CSS MODULES PRO</button>
    </>
  )
}

export default CssModulesButton