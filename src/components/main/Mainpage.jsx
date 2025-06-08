import '../main/MainP.css'


function Mainpage(){
  return(
  <>
   <section className="download">
    <article className='small_text'>
     Clipboard allows you to track
     and organize everything you copy.
     Instantly access your clipboard on 
     all your devices.
    </article>

    <div className="btns">
      <button className='IOS'>Download for iOS</button>
      <button className='Mac'>Download for Mac</button>
    </div>
   </section>

   <section className='track'>
     <div className="description_text">
      <h2>Keep track of your snippets</h2>
      <article>
         Clipboard instantly stores any item you copy in the cloud,
         meaning you can access your snippets immediately on all your devices.
         Our Mac and iOS apps will help you organize everything.
      </article>
     </div>

     <div className='screen_img&text'>
      <aside className='screen_img'></aside>
      <aside className='steps'></aside>
     </div>
   </section>
  </>
  )
}

export default Mainpage