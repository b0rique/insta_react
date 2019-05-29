import React from 'react';
import User from './User';

export default function Users() {
    return(
        <div className="right">
               <User 
                src ="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205212/middle-aged-man-fat-2.jpg" 
                alt ="prince"
                name ="Fat Man"/>
               <div className="users__block">
               <User 
                src ="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205212/middle-aged-man-fat-2.jpg" 
                alt ="prince"
                name ="Fat Man"
                min/>
            <User 
                src ="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205212/middle-aged-man-fat-2.jpg" 
                alt ="prince"
                name ="Fat Man"
                min/>
            <User 
                src ="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205212/middle-aged-man-fat-2.jpg" 
                alt ="prince"
                name ="Fat Man"
                min/>
 <User 
                src ="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205212/middle-aged-man-fat-2.jpg" 
                alt ="prince"
                name ="Fat Man"
                min/>
               </div>
            
           
        </div>
    )
}