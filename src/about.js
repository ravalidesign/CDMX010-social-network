import {onNavigate} from './router.js'
export const about = (target) =>{
    const html= `
<h1>I am about Page</h1>

`
target.innerHTML = html

}


export default about