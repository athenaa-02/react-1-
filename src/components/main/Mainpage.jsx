import '../main/MainP.css'
import screen from '../../assets/screen.png'
import Childcomponent from '../childcomponent/Childcomponent'
import Containers from '../containers/Containers'
import tabs from '../../assets/tabs.png'
import logo1 from '../../assets/logo1.svg'
import logo2 from '../../assets/logo2.svg'
import logo3 from '../../assets/logo3.svg'


function Mainpage() {
  const text1 = 'Easily search your snippets by content, category, web address, application, and more.'
  const text2 = 'Instantly saves and syncs snippets across all your devices.'
  const text3 = 'Retrieve any snippets from the first moment you started using the app.'

  return (
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

        <div className='screenimg_text'>
          <img src={screen} alt="" />
          <aside className='steps'>
            <Childcomponent header='Quick Search' text={text1}></Childcomponent>
            <Childcomponent header='iCloud Sync' text={text2}></Childcomponent>
            <Childcomponent header='Complete History' text={text3}></Childcomponent>
          </aside>
        </div>
      </section>

      <section className='access'>
        <div>
          <h4>Access Clipboard anywhere</h4>
          <article>
            Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
          </article>
        </div>

        <img src={tabs} alt="" />

        <div>
          <h4>Supercharge your workflow</h4>
          <article>
            We’ve got the tools to boost your productivity.
          </article>
        </div>
      
      </section>

      <section className="containers">
        <Containers img={logo1} title='Create blacklists' text='Ensure sensitive information never makes its way to your clipboard by excluding certain sources.'></Containers>
        <Containers img={logo2} title='Plain text snippets' text='Remove unwanted formatting from copied text for a consistent look.'></Containers>
        <Containers img={logo3} title='Sneak preview' text='Quick preview of all snippets on your Clipboard for easy access.'></Containers>
      </section>
    </>
  )
}

export default Mainpage