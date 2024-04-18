
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const popup = document.getElementById('popup');
    const popupHeading = document.getElementById('popup-heading');
    const popupSubheading = document.getElementById('popup-subheading');
    const popupDescription = document.getElementById('popup-description');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const cardType = card.querySelector('.card__heading-span').textContent;
            updatePopupContent(cardType);
            popup.style.display = 'block'; // Show the popup
        });
    });

    function updatePopupContent(cardType) {
        switch (cardType) {
          case "British Columbia":
            popupHeading.textContent = "Beyond Every Horizon";
            popupSubheading.textContent =
              "British Columbia: Uncover the Beauty, Stay for the Warmth.";
            popupDescription.textContent =
              "British Columbia, a splendid province on the west coast of Canada, is a land where natures bounty and vibrant cultural tapestries come together to create a truly unique destination. With its breathtaking landscapes that range from snow-dusted mountains to lush, verdant forests and rugged coastlines, British Columbia offers endless opportunities for adventure and relaxation. The province is renowned for its outdoor recreational activities, including skiing, mountain biking, and whale watching, making it a haven for thrill-seekers and nature enthusiasts alike. Major cities like Vancouver blend urban sophistication with stunning natural scenery, providing a backdrop for diverse cultural experiences and a thriving arts scene. Victoria, the capital, boasts charming historic architecture and vibrant gardens. British Columbia is also a mosaic of cultural influences, home to a rich Indigenous heritage and communities from all over the world, adding to its dynamic food scene and cultural festivals.";
            break;
          case "Alberta":
            popupHeading.textContent = "Adventure Awaits";
            popupSubheading.textContent =
              "Alberta: Wild Hearts and Wild Places.";
            popupDescription.textContent =
              "Alberta, nestled in the heart of Canada, is a province known for its stunning natural beauty and dynamic spirit. Home to both rugged wilderness and bustling urban centers, Alberta offers a unique blend of experiences that cater to all tastes and interests. The province is famed for its breathtaking landscapes, including the majestic Canadian Rockies and the vast, open prairies that stretch as far as the eye can see. Outdoor enthusiasts are drawn to Alberta for world-class skiing, hiking, and wildlife viewing, particularly in renowned national parks like Banff and Jasper, which are UNESCO World Heritage sites.Alberta’s cities, particularly Edmonton and Calgary, pulse with energy and vibrancy. Calgary, famous for its annual Stampede, boasts a lively cultural scene with numerous festivals, a thriving arts community, and an innovative culinary scene. Edmonton, known as Canada Festival City, dazzles visitors with year-round events and a strong commitment to the arts, alongside its expansive river valley that offers over 160 kilometers of maintained pathways.";
            break;
          case "Quebec":
            popupHeading.textContent = "Discover the Heart of French Canada";
            popupSubheading.textContent =
              "Quebec: Where Tradition Meets Timeless Charm";
            popupDescription.textContent =
              "Quebec stands out as a vibrant province steeped in rich history and a deep-rooted European flair that sets it apart in North America. From the cobblestone streets of Old Quebec City, a UNESCO World Heritage site, to the bustling metropolis of Montreal, known for its diverse arts scene and gastronomical delights, Quebec offers a slice of Europe with a distinctly Canadian twist. Visitors can delve into the province's fascinating past at the Plains of Abraham or indulge in contemporary culture at the Montreal International Jazz Festival. The landscape varies from serene rolling hills in the countryside to rugged northern tundra, providing a plethora of activities for every season. Whether it’s exploring quaint villages, engaging in winter sports, or celebrating during vibrant festivals, Quebec promises a memorable experience that blends its historical past with a lively present.";
            break;
          case "Ontario":
            popupHeading.textContent =
              "Explore Ontario: A Land of Iconic Wonders";
            popupSubheading.textContent =
              "Ontario: Dynamic Cities and Serene Landscapes";
            popupDescription.textContent =
              "Ontario, the most populous province in Canada, offers an eclectic mix of modern cities, pristine parks, and cultural treasures. Home to the iconic Niagara Falls, one of the natural wonders of the world, and Toronto, Canada's largest city, Ontario presents endless opportunities for discovery. Toronto's skyline, dominated by the towering CN Tower, offers a multitude of cultural institutions, shopping districts, and global cuisines that reflect its multicultural population. Beyond the urban excitement, the serene beauty of the Canadian Shield's lakes and forests offers a tranquil retreat for nature lovers and adventure seekers alike. Ontario’s rich history is celebrated in places like the national historic site of Kingston and the culturally vibrant Ottawa, Canada’s capital, which hosts celebrated museums and the colorful Changing of the Guard ceremony. From enjoying the arts and culinary scenes in bustling cities to relaxing in the quiet majesty of its national parks, Ontario provides a diverse range of experiences that cater to all tastes and interests.";
            break;
          case "Nova Scotia":
            popupHeading.textContent =
              "Nova Scotia: Discover the Spirit of the Sea";
            popupSubheading.textContent =
              "Nova Scotia: Where History and Ocean Tides Meet";
            popupDescription.textContent =
              "Nova Scotia, a province that's as deeply connected to the sea as it is steeped in history, invites visitors to explore its picturesque coastline and vibrant cultural life. This maritime province, surrounded by the natural beauty of the Atlantic Ocean, offers an abundance of scenic vistas, from the rugged cliffs of Cape Breton Island to the peaceful shores of the Bay of Fundy. The capital city, Halifax, is rich with maritime heritage, housing the Maritime Museum of the Atlantic which showcases the Titanic artifact exhibit and the storied naval history of the region. Nova Scotia's landscape is dotted with quaint fishing villages and lighthouses that stand as beacons of its seafaring past. The province's culinary scene is renowned for its fresh seafood, especially its world-famous lobster and Digby scallops.";
            break;
          case "New Brunswick":
            popupHeading.textContent =
              "New Brunswick: A Journey Through Nature and Culture";
            popupSubheading.textContent =
              "New Brunswick: Where Canada’s Wilderness and History Converge";
            popupDescription.textContent =
              "New Brunswick, nestled on Canada's eastern seaboard, offers a rich tapestry of culture, history, and natural splendor. As the only officially bilingual province in Canada, it presents a unique cultural fusion of French Acadian and British heritage, mirrored in its vibrant festivals, traditional music, and culinary delights. The province’s landscape is marked by picturesque rivers, dense forests, and the dramatic tides of the Bay of Fundy, famous for having the highest tides in the world. Visitors can explore the rugged coastline, venture into the expansive wilderness of the Appalachian Mountains, or discover the charming, historic streets of Fredericton, the provincial capital.";
            break;
          // Add cases for other card types
        }
    }

    document.querySelector('.popup__close').addEventListener('click', function() {
        popup.style.display = 'none'; // Hide the popup
    });
});

