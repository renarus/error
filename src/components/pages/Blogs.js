import React from 'react'
import Card2 from './Card2'
import img1 from '../../assets/img/onee.jpg'
import img2 from '../../assets/img/twoo.jpg'
import img3 from '../../assets/img/eating.jpg'
import img4 from '../../assets/img/four.jpg'
import img5 from '../../assets/img/1 (9).jpg'
import img6 from '../../assets/img/1 (10).jpg'
import img7 from '../../assets/img/large.png'
import img8 from '../../assets/img/111.jpg'
import img9 from '../../assets/img/1 (12).jpg'
import img10 from '../../assets/img/1 (13).jpg'
import img11 from '../../assets/img/ben.jpg'
import img12 from '../../assets/img/woman.jpg'
import img13 from '../../assets/img/1 (14).jpg'
import img14 from '../../assets/img/1 (15).jpg'
import img15 from '../../assets/img/1 (16).jpg'
import img16 from '../../assets/img/1 (17).jpg'
import img17 from '../../assets/img/1 (18).jpg'
import img18 from '../../assets/img/1 (19).jpg'
import img19 from '../../assets/img/1 (20).jpg'
import img20 from '../../assets/img/1 (21).jpg'
import img21 from '../../assets/img/1 (22).jpg'
import img22 from '../../assets/img/1 (23).jpg'
import img23 from '../../assets/img/1 (24).jpg'
import img24 from '../../assets/img/1 (25).jpg'
import img25 from '../../assets/img/1 (26).jpg'
import img26 from '../../assets/img/1 (27).jpg'
import img27 from '../../assets/img/1 (28).jpg'
import img28 from '../../assets/img/1 (29).jpg'
import img29 from '../../assets/img/1 (30).jpg'
// import '../../assets/sass/dark.css'
const Blogs = () => {
  return (
      <div className=' d-flex justify-content-between'>
       <div className="row">
         <Card2 img={img1} title="Newsweek"  />
         <Card2 img={img2} title="Maxim" />
         <Card2 img={img3} title="Clean Eating" />
         <Card2 img={img4} title="TV Guide Magazine" />
         <Card2 img={img18}  title="Woman's Day"/>
     
         </div>
         <div className="row ">
         <Card2 img={img5} title="OK!" />
         <Card2 img={img6} title="Yacthing World"/>
         <Card2 img={img7} title="People"/>
         <Card2 img={img8} title="Forbes"/>
         <Card2 img={img23} title="Men's Health"/>
        
         </div>
         <div className="row ">
         <Card2 img={img9}  title="Time"/>
         <Card2 img={img10}  title="Food Network "/>
         <Card2 img={img11}  title="Entertainment"/>
         <Card2 img={img12}  title="Woman's Day"/>
         <Card2 img={img24}  title="Allure"/>
     
         </div>
         <div className="row ">
         <Card2 img={img13}  title="Sports Illustrated"/>
         <Card2 img={img14}  title="Fortune"/>
         <Card2 img={img15}  title="PC Magazine"/>
         <Card2 img={img16}  title="Trail Runner"/>
         <Card2 img={img17}  title="Guideposts "/>
    
         </div>
         <div className="row ">
         <Card2 img={img18}  title="WIRED"/>
         <Card2 img={img19}  title="InStyle "/>
         <Card2 img={img20}  title="Country Living"/>
         <Card2 img={img21}  title="Health"/>
         <Card2 img={img22}  title="Golf Magazine "/>
         
         </div>
         <div className="row d-flex ">
         <Card2 img={img25}  title="Spider Magazine "/>
         <Card2 img={img26} title="Oklahoma Today"/>
         <Card2 img={img27} title="Mynorth Guide "/>
         <Card2 img={img28}  title="Pammie Magazine "/>
         <Card2 img={img29}  title="The New Yorker"/>
        
         </div>
         </div>
  )
}

export default Blogs