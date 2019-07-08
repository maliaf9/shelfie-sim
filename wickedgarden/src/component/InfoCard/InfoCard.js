import React, {Component} from "react";
import './InfoCard.css'
import axios from 'axios';
import Boneset from './Boneset.jpg';
import CrampBark from '../../images/cramp-bark.jpg';
import Mugwort from '../../images/Mugwort.jpg';
import SiberianGinseng from '../../images/Siberian-Ginseng.jpg';



export default class DragandDrop extends Component {
  state = {
    herbs: [
      {
        id: '1',
        product_name: "Boneset: ",
        main_use: "Immune Booster, Antibacterial, and Anti Inflammatory",
        binomial_nomenclature: "Eupatorium perfoliatum L.",
        medicinal_uses: "Primarily as an alternative to mainstream cold and flu remedies.",
        how_to_use: "The traditional dosage for boneset tea was 2 grams of dried leaves and flowers per pint of boiling water",
        warning: "It should be taken with considerable caution as it can be harmful in large doses.",
        disclaimer: "The information provided is solely based off of personal opionion. I am not a doctor nor certified to give medical advice. I am not responsible for mis-use and conjecture",
        img_url: {Boneset}
      },
      {
      id: '2',
      product_name: "Cramp Bark: ",
      main_use: "Muscle Pain Relief, Menstrual Cramps",
      binomial_nomenclature: "Viburnum opulus",
      medicinal_uses: "The plant has historically been used to treat kidney pain, mumps disease, swollen glands, eye disorders, and even forms of cancer. It was thought for a long time that the guilder rose possessed magical healing powers due to its overall effectiveness as a homeopathic remedy.",
      how_to_use: "2 teaspoonfuls of the dried bark into a cup of water and bring it to boil. Simmer gently for 10-15 minutes. This should be consumed hot three times a day.",
      warning: "While it is safe to eat cramp bark in small doses, the plant is can be toxic and needs to be eaten in the correct dosage, as listed in the section above",
      disclaimer: "The information provided is solely based off of personal opionion. I am not a doctor nor certified to give medical advice. I am not responsible for mis-use and conjecture",
      img_url: {CrampBark}
      },
      {
      id: '3',
      product_name: "Mugwort",
      main_use: "Moxibustion, Smudge Sticks and Smoking Mugwort",
      binomial_nomenclature: "Artemesia Vulgaris",
      medicinal_uses: "Moxibustion is an eastern traditional medicine technique, where a stick made of flammable fibers is lit on one end and applied to pressure points on the skin to stimulate circulation. It can be a powerful treatment for insomnia, palsy, and digestive issues. It is also useful in supporting regular menstruation and joint pain.",
      how_to_use: "Typically, 1-2 teaspoons of dried herb is sufficient for infusing tea. It is common for Mugwort to be mixed with other herbs when making tea. One such herb, skullcap may enhance dream activity and improve sleep significantly when used in combination with Mugwort.",
      warning: "People with allergies should be cautious when trying Mugwort because of similarities with other allergens. Women should also be careful when using Mugwort, especially if they may become pregnant.",
      disclaimer: "The information provided is solely based off of personal opionion. I am not a doctor nor certified to give medical advice. I am not responsible for mis-use and conjecture",
      img_url: {Mugwort}
      },
      {
      id: '4',
      product_name: "Siberian Ginseng",
      main_use: "Physical Performance and Cognitive Enhancement",
      binomial_nomenclature: "Eleuthero Root",
      medicinal_uses: "enhance physical and mental performance as well as boost the immune system. Recent studies have examined Eleuthero in the treatment of cancer, herpes, HIV, Parkinson’s disease, and bipolar disorder.",
      how_to_use: "The standard dose for Eleuthero is between 300 and 1200 mg.",
      warning: "Because of its boosting effect on the immune system, Eleuthero should not be taken with immunosuppressants, and people with autoimmune disorders, such as rheumatoid arthritis, lupus, or Crohn’s disease, should not take it.",
      disclaimer: "The information provided is solely based off of personal opionion. I am not a doctor nor certified to give medical advice. I am not responsible for mis-use and conjecture",
      img_url: {SiberianGinseng}
      }
      
  
        ]
  };

  onDragStart = (event, product_name) => {
    console.log('dragstart on div: ', product_name);
    event.dataTransfer.setData("product_name", product_name);
}
onDragOver = (event) => {
    event.preventDefault();
}

onDrop = (event, cat) => {
    let product_name = event.dataTransfer.getData("product_name");

    let herbs = this.state.herbs.filter((herb) => {
        if (herb.product_name == product_name) {
            herb.id = cat;
        }
        return herb;
    });

    this.setState({
      ...this.state,
      herbs
  })
}






// class InfoCard extends Component{
//   constructor() {
//     super();
//     this.state = {
//       id: 1,
//       cardCollection: [],
//       card: {}
//     };
//   }
//   componentDidMount =() => {
//     axios.get( '/api/herbs' ).then( response => {
//       this.setState({ cardCollection: response.data });
//     });
//   }

//   handleChange = ( event ) => {
//     this.setState({ card: event.target.value });
//   }

//   createCard = ( event )=> {
//     const { card } = this.state;
//     if ( event.key === "Enter" && card.length !== 0 ) {
//       axios.post( '/api/herbs', { card } ).then( response => {
//         this.setState({ cardCollection: response.data });
//       });

//       this.setState({ card: '' });
//     }
//   }

//   editCollection = ( id, card ) => {
//     console.log( 'editCollection:', id, card ); 
//     axios.put( `/api/herbs/${id}`, { card } ).then( response => {
//       this.setState({ cardCollection: response.data });
//     });
//   }

//   removeCard = ( id ) => {
//     axios.delete( `/api/herbs/${id}` ).then( response => {
//       this.setState({ cardCollection: response.data });
//     });
//   }
  render() {
    var herbs = {
      inProgress: [],
      Done: []
    }

      // this.state.herbs.forEach ((herb) => {
      //   herbs[herb.id].push(
      //     <div key={herb.product_name.id} 
      //     onDragStart = {(event) => this.onDragStart(event, herb.product_name)}
      //     draggable
      //       className="draggable"
      //       style = {{backgroundColor: herb.bgcolor}}>
      //       {herb.product_name}
      //     </div>
      //   )
      // });



    return (
      <div className = 'drag-container'>
        <h2 className= "head">Drag and Drop Items Into List</h2>
        <div className="inProgress"
          onDragOver ={(event) => this.onDragOver(event)}
          onDrop={(event) => {this.onDrop(event, "inProgress")}}>
	          <span className="group-header">In Progress</span>
	          {herbs.inProgress}
	        </div>
	        <div className="droppable"
            onDragOver= {(event) => this.onDragOver(event)}
            onDrop={(event) => this.onDrop(event, "Done")}>
	          <span className="group-header">Done</span>
	          {herbs.Done}
	        </div>	

        <div className="card">
        <img className='image' src={Boneset} />
      <div className="container">
       <h4><b>Boneset</b> <br/> (Eupatorium perfoliatum L.) </h4> 
       <p>Immune Booster & AntiInflamatory</p> 
       <p>Medicinal Use: Primarily as an alternative to mainstream cold and flu remedies.
</p>
<p>How To Use: The traditional dosage for boneset tea was 2 grams of dried leaves and flowers per pint of boiling water.
</p>
<h5 className= 'warning'>Warning!</h5>
<p>It should be taken with considerable caution as it can be harmful in large doses.
</p>

       </div>
       <img className='image' src={CrampBark} />
      <div className="container">
        <h4><b>CrampBark</b> <br/> (Viburnum Opulus)</h4> 
       <p>Relieve Muscle Tension & Menstrual Cramps</p> 
       <p>Medicinal Use: The plant has historically been used to treat kidney pain, mumps disease, swollen glands, eye disorders, and even forms of cancer. It was thought for a long time that the guilder rose possessed magical healing powers due to its overall effectiveness as a homeopathic remedy.</p>
       <p>How To Use: 2 teaspoonfuls of the dried bark into a cup of water and bring it to boil. Simmer gently for 10-15 minutes. This should be consumed hot three times a day.</p>
       <h5 className='warning'>Warning!</h5>
       <p>While it is safe to eat cramp bark in small doses, the plant is can be toxic and needs to be eaten in the correct dosage, as listed in the section above.</p>
       </div>

       <img className='image' src={Mugwort} />
      <div className="container">
        <h4><b>Mugwort</b> <br/> Artemesia Vulgaris</h4> 
       <p>Moxibustion, Smudge Sticks and Smoking Mugwort</p> 
       <p>Medicinal Use: Moxibustion is an eastern traditional medicine technique, where a stick made of flammable fibers is lit on one end and applied to pressure points on the skin to stimulate circulation. It can be a powerful treatment for insomnia, palsy, and digestive issues. It is also useful in supporting regular menstruation and joint pain.</p> 
       <p>How To Use: Typically, 1-2 teaspoons of dried herb is sufficient for infusing tea. It is common for Mugwort to be mixed with other herbs when making tea. One such herb, skullcap may enhance dream activity and improve sleep significantly when used in combination with Mugwort.</p>
       <h5 className='warning'>Warning!</h5>
       <p>People with allergies should be cautious when trying Mugwort because of similarities with other allergens. Women should also be careful when using Mugwort, especially if they may become pregnant.</p>
       </div>

       <img className='image' src={SiberianGinseng} />
      <div className="container">
        <h4><b>Siberian Ginseng</b><br/> (Eleuthero Root) </h4> 
       <p>Physical Performance and Cognitive Enhancement</p> 
       <p>Medicinal Uses: Enhance physical and mental performance as well as boost the immune system. Recent studies have examined Eleuthero in the treatment of cancer, herpes, HIV, Parkinson’s disease, and bipolar disorder.</p>
       <p>How To Use: The standard dose for Eleuthero is between 300 and 1200 mg.</p>
       <h5 className='warning'>Warning!</h5>
       <p>Because of its boosting effect on the immune system, Eleuthero should not be taken with immunosuppressants, and people with autoimmune disorders, such as rheumatoid arthritis, lupus, or Crohn’s disease, should not take it.</p>
       </div>
      
        
      </div>
<footer>DISCLAIMER: <br/> The information provided is solely based off of personal opionion. I am not a doctor nor certified to give medical advice. I am not responsible for mis-use and conjecture.</footer>

      </div>

    )
  }
  

};

