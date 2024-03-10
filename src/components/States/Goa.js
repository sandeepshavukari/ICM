import React from 'react';
import State from "../States/State";

export default function Goa() {
  return (
    <div className="destination">
      <h1>Goa</h1>
      <State 
        className="first-des"
        heading="Geography"
        text="Goa, located on the western coast of India, is renowned for its beautiful beaches, lush greenery, and scenic landscapes. It is bordered by the Arabian Sea to the west and the Western Ghats to the east, offering a unique blend of coastal and inland attractions."
        img1="https://upload.wikimedia.org/wikipedia/commons/3/32/Administrative_map_of_Goa.png"
      />
      <State 
        className="first-des-reverse"
        heading="Life and Culture"
        text="Goa's culture is a vibrant fusion of Indian and Portuguese influences, reflected in its architecture, cuisine, and festivals. The laid-back lifestyle, warm hospitality, and love for music and dance are integral to the Goan way of life, creating a unique cultural experience."
        img1="https://www.vianaar.com/images-vianaar/goa-culture-3.jpg"
      />
      <State 
        className="first-des"
        heading="Food"
        text="Goan cuisine is known for its rich and flavorful dishes, heavily influenced by Portuguese, Konkani, and Saraswat cuisines. Popular dishes include seafood specialties like Goan fish curry, Vindaloo, and Xacuti, along with traditional sweets like Bebinca and Dodol."
        img1="https://www.elitehavens.com/magazine/wp-content/uploads/2022/11/Credit_Shores-Threesixtyfive-res.jpg"
      />
      <State 
        className="first-des-reverse"
        heading="Handicrafts"
        text="Goa boasts a vibrant handicraft industry, with artisans skilled in crafting unique products like terracotta pottery, brass and copperware, wooden carvings, and handmade jewelry. These traditional handicrafts showcase the rich cultural heritage and artistic prowess of the region."
        img1="https://www.boontoon.com/blog/wp-content/uploads/2017/07/06.jpg"
      />
      <State 
        className="first-des"
        heading="Dance and Music"
        text="Music and dance are integral to Goan culture, with genres like Fado, Mando, and Deknni reflecting its diverse heritage. Traditional Goan dances like the Fugdi, Dekhnni, and Dhalo are performed during festivals and celebrations, adding rhythm and vibrancy to the cultural landscape."
        img1="https://madvikretreat.com/wp-content/uploads/2023/02/Get-Ready-to-Celebrate-The-Upcoming-Goa-Carnival-Brings-You-Music-Colors-and-Culture.png"
      />
      <State 
        className="first-des-reverse"
        heading="Dressing"
        text="Traditional attire in Goa varies based on cultural and religious affiliations. While men often wear the traditional Dhoti and Kurta or Pajama, women adorn themselves in the vibrant Kunbi saree or the Portuguese-inspired Indo-Portuguese dresses during festivities."
        img1="https://freegoaguide.com/wp-content/uploads/2023/06/Culture-of-Goa-01.webp"
      />
    </div>
  );
}