import React from 'react'
import vg from '../../assets/img/vg.jpg'
import vg3 from '../../assets/img/vogue3.jpg'
import elle from '../../assets/img/elle2.jpg'
const About = () => {
  return (
    <section className='firstsec'>
      <h1>Vogue UK Magazine </h1>
      <div className="textsimg container">
        <img src={vg} alt="" />
        <p>British Vogue is a British fashion magazine published based in London since autumn 1916. It is the British edition of the American magazine Vogue and is owned and distributed by Condé Nast. British Vogue's editor in 2012 claimed that, "Vogue's power is universally acknowledged. It's the place everybody wants to be if they want to be in the world of fashion" and 85% of the magazine's readers agree that "Vogue is the Fashion Bible".[3] The magazine is considered to be one that links fashion to high society and class, teaching its readers how to 'assume a distinctively chic and modern appearance'.[4]
          British Vogue is a magazine whose success is based upon its advertising rather than its sales revenue. In 2007, it ran 2,020 pages of advertising at an average of £16,000 a page. It is deemed to be more commercial than other editions of Vogue.[5] British Vogue is the most profitable British magazine as well as the most profitable edition of Vogue besides the US and China editions.[6]</p>
      </div>
      <h1>Tatler Magazine </h1>
      <div className="textsimg container">
        <img src={vg3} alt="" />
        <p>Tatler is a British magazine published by Condé Nast Publications focusing on fashion and lifestyle, as well as coverage of high society and politics. It is targeted towards the British upper-middle class and upper class, and those interested in society events. Its readership is the wealthiest of all Condé Nast's publications. It was founded in 1901 by Clement Shorter. Tatler is also published in Russia by Conde Nast, and by Edipresse Media Asia.Alexandra Shulman was Editor-in-Chief of the magazine from 1992 to 2017. When Shulman was editor, the magazine drew more than a million readers. Shulman was known for developing collector's issues of British Vogue, such as the 'Gold Millennium Issue' where celebrities and supermodels such as Kate Moss featured on the cover. </p>
      </div>
      <h1>Elle UK Magazine </h1>
      <div className="textsimg container">
        <img src={elle} alt="" />
        <p>Elle (stylized ELLE) is a worldwide women's lifestyle magazine of French origin that focuses on fashion, beauty, health and entertainment.[1] The title means "she" or "her" in French. It was founded in 1945 by Hélène Gordon-Lazareff and her husband, the writer Pierre Lazareff. The magazine's readership has continuously grown since its founding, increasing to 800,000 across France by the 1960s. Elle has since expanded outside of France, creating a global network of publications and readers. Elle's Japanese publication was launched in 1969, defining it as the first international Elle publication of many.
          Previous editors of the magazine include Jean-Dominique Bauby, well known for his memoir, and Roberta Myers, the longest-serving editor-in-chief at Elle. Nina Garcia currently holds the position of editor-in-chief at Elle, appointed after the departure of Myers. </p>
      </div>
    </section>
  )
}

export default About