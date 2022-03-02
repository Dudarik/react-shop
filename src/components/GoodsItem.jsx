export default function GoodsItem(props){
  const { 
    mainId: id,
    displayName: name,
    displayDescription: description,
    displayAssets: [{ full_background }],
    price: { regularPrice: price },
    addToBasket} = props;

  // console.log(id, name, description, img, price)
  return(
    // <div className="row">
    //   <div className="col s12 m6">
        <div className="card" id={id}>
          <div className="card-image">
            <img src={full_background} alt={name} />
            {/* <span className="card-title">{name}</span> */}
            {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> */}
          </div>
          <div className="card-content">
            <span className="card-title">{name}</span>
            <p className="card-description">{description}</p>
          </div>
          <div className="card-action">
          
           <div className="price">{price} Буказойдов</div>
          </div>
          <div className="card-action">
            <button className="btn" onClick={() => addToBasket({id, name, price})}>Купить</button>
          </div>
        </div>
    //   </div>
    // </div>
  )
}
  
// {
//   "mainId": "CID_734_Athena_Commando_F_BannerRed",
//   "displayName": "Багряная метка",
//   "displayDescription": "Легендарный символ неукротимой ярости.",
//   "displayType": "Экипировка",
//   "mainType": "outfit",
//   "offerId": "v2:/2aab592b9baa7f8b6c4f5a82db0381604ec916115c21ea6a157690106c27220d",
//   "displayAssets": [
//       {
//           "displayAsset": "DAv2_CID_734_F_BannerRed",
//           "materialInstance": "MI_CID_734_F_BannerRed",
//           "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_734_F_BannerRed/MI_CID_734_F_BannerRed.png",
//           "flipbook": null,
//           "background_texture": null,
//           "background": "https://media.fortniteapi.io/images/cosmetics/b5c05e27736ff99ff547e6a9e847dc6b/v2/MI_CID_734_F_BannerRed/background.png",
//           "full_background": "https://media.fortniteapi.io/images/cosmetics/b5c05e27736ff99ff547e6a9e847dc6b/v2/MI_CID_734_F_BannerRed/info.ru.png"
//       },
//       {
//           "displayAsset": "DAv2_CID_734_F_BannerRed",
//           "materialInstance": "MI_CID_734_F_BannerRed_02",
//           "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_734_F_BannerRed/MI_CID_734_F_BannerRed_02.png",
//           "flipbook": null,
//           "background_texture": null,
//           "background": "https://media.fortniteapi.io/images/cosmetics/b5c05e27736ff99ff547e6a9e847dc6b/v2/MI_CID_734_F_BannerRed_02/background.png",
//           "full_background": "https://media.fortniteapi.io/images/cosmetics/b5c05e27736ff99ff547e6a9e847dc6b/v2/MI_CID_734_F_BannerRed_02/info.ru.png"
//       },
//       {
//           "displayAsset": "DAv2_CID_734_F_BannerRed",
//           "materialInstance": "MI_CID_734_F_BannerRed_03",
//           "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_734_F_BannerRed/MI_CID_734_F_BannerRed_03.png",
//           "flipbook": null,
//           "background_texture": null,
//           "background": "https://media.fortniteapi.io/images/cosmetics/b5c05e27736ff99ff547e6a9e847dc6b/v2/MI_CID_734_F_BannerRed_03/background.png",
//           "full_background": "https://media.fortniteapi.io/images/cosmetics/b5c05e27736ff99ff547e6a9e847dc6b/v2/MI_CID_734_F_BannerRed_03/info.ru.png"
//       }
//   ],
//   "firstReleaseDate": "2020-03-22",
//   "previousReleaseDate": "2022-01-26",
//   "giftAllowed": true,
//   "buyAllowed": true,
//   "price": {
//       "regularPrice": 800,
//       "finalPrice": 800
//   },
//   "rarity": {
//       "id": "Uncommon",
//       "name": "НЕОБЫЧНЫЙ"
//   },
//   "series": null,
//   "banner": null,
//   "offerTag": null,
//   "granted": [
//       {
//           "id": "CID_734_Athena_Commando_F_BannerRed",
//           "type": {
//               "id": "outfit",
//               "name": "Экипировка"
//           },
//           "name": "Багряная метка",
//           "description": "Легендарный символ неукротимой ярости.",
//           "rarity": {
//               "id": "Uncommon",
//               "name": "НЕОБЫЧНЫЙ"
//           },
//           "series": null,
//           "images": {
//               "icon": "https://media.fortniteapi.io/images/b5c05e27736ff99ff547e6a9e847dc6b/transparent.png",
//               "featured": "https://media.fortniteapi.io/images/b5c05e27736ff99ff547e6a9e847dc6b/full_featured.png",
//               "background": "https://media.fortniteapi.io/images/cosmetics/b5c05e27736ff99ff547e6a9e847dc6b/v2/background.png",
//               "icon_background": "https://media.fortniteapi.io/images/cosmetics/b5c05e27736ff99ff547e6a9e847dc6b/v2/icon_background.png",
//               "full_background": "https://media.fortniteapi.io/images/cosmetics/b5c05e27736ff99ff547e6a9e847dc6b/v2/info.ru.png"
//           },
//           "video": null,
//           "audio": null,
//           "gameplayTags": [
//               "Cosmetics.Source.ItemShop",
//               "Cosmetics.Filter.Season.12",
//               "Cosmetics.Set.LateShot",
//               "Cosmetics.UserFacingFlags.HasVariants"
//           ],
//           "set": {
//               "id": "LateShot",
//               "name": "Кармин",
//               "partOf": "Входит в набор «Кармин»."
//           }
//       }
//   ],
//   "priority": -1,
//   "section": {
//       "id": "Featured",
//       "name": "Рекомендуемое",
//       "landingPriority": 70
//   },
//   "groupIndex": 0,
//   "storeName": "BRWeeklyStorefront",
//   "tileSize": "Normal",
//   "categories": [
//       "Panel 01"
//   ]
// }