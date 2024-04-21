document.getElementById('quiz-form').addEventListener('submit', function(event){
    event.preventDefault();


const weight = parseFloat(document.getElementById('weight').value);
const height = parseFloat(document.getElementById('height').value);
const goals = document.getElementById('goals').value;
const activityLevel = document.getElementById('activityLevel').value;

const recommendations = getRecommendations(weight, height, goals, activityLevel);

displayRecommendations(recommendations);

document.getElementById('.game-container').style.display = 'none';
});

function getRecommendations(weight, height, goals, activityLevel){
    let recommendations = [];

    switch(goals){
        case 'weight_loss':
            if (activityLevel === 'one_to_two_days') {
                // Recommendations for weight loss with low activity level
                recommendations = [
                    { name: 'AlaniNu Cherry Twist', description: 'Great for the Boost of Energy to Take on Your Workouts.', image: '../Image/Alani_Energy_Drink_Cherry_Twist_12pk_Front.png', link: '../Products/Alani_CherryTwist.html' },
                    { name: 'AlaniNu Orange Kiss', description: 'Great for the Boost of Energy to Take on Your Workouts.', image: '../Image/Alani_Energy_Orange_Kiss_12pk_can_Front.png', link: '../Products/Alani_OrangeKiss.html' },
                    { name: 'Creatine Monohydrate', description: 'Increases muscle strength and performance.', image: '../Image/GNC_Pro_Performance_Creatine_100sv_Tub_1.png', link: '../Products/GNC_Creatine.html' }
                ];
            } else {
                // Recommendations for weight loss with higher activity level
                recommendations = [
                    { name: 'AlaniNu Cherry Twist', description: 'Great for the Boost of Energy to Take on Your Workouts.', image: '../Image/Alani_Energy_Drink_Cherry_Twist_12pk_Front.png', link: '../Products/Alani_CherryTwist.html' },
                    { name: 'AlaniNu Orange Kiss', description: 'Great for the Boost of Energy to Take on Your Workouts.', image: '../Image/Alani_Energy_Orange_Kiss_12pk_can_Front.png', link: '../Products/Alani_OrangeKiss.html' },
                    { name: 'Creatine Monohydrate', description: 'Increases muscle strength and performance.', image: '../Image/GNC_Pro_Performance_Creatine_100sv_Tub_1.png', link: '../Products/GNC_Creatine.html' }
                ];
            }
            break;
        case 'weight_gain':
            // Recommendations for weight gain based on activity level
            if (activityLevel === 'one_to_two_days') {
                // Recommendations for weight loss with low activity level
                recommendations = [
                    // Add recommendations for weight gain here
                    { name: 'Ghost Chips Ahoy Protein Powder', description: 'Great Supplement to Ingest Protein While Saving Time.', image: '../Products', link: '../Products/Ghost_ChipsAhoy.html' },
                    { name: 'GNC Omega-3 Fish Oil', description: 'Supports heart health and joint flexibility.', image: 'omega_3.jpg', link: 'GNC_FishOil.html' },
                    { name: 'Barebells Creamy Crisp', description: 'Perfect On-The-Go Snack to Ingest Protein.', image: 'omega_3.jpg', link: 'Barebells_CreamyCrisp.html' }
                ];
            } else {
                // Recommendations for weight loss with higher activity level
                recommendations = [
                    { name: 'Whey Protein', description: 'Promotes muscle recovery and growth after workouts.', image: 'omega_3.jpg', link: '#' },
                    { name: 'BCAAs', description: 'Supports muscle protein synthesis and reduces muscle soreness.', image: 'omega_3.jpg', link: '#' },
                    { name: 'Creatine Monohydrate', description: 'Increases muscle strength and performance.', image: 'omega_3.jpg', link: '#' }
                ];
            }
            break;


        case 'weight_maintain':
            // Recommendations for weight maintenance based on activity level
           if (activityLevel === 'one_to_two_days') {
                // Recommendations for weight loss with low activity level
                recommendations = [
                    // Add recommendations for weight maintenance here
                    { name: 'Energy Drink', description: 'Great for the Boost of Energy to Take on Your Workouts.', image: 'vitamin_d3.jpg', link: '#' },
                    { name: 'Whey Protein Powder', description: 'Great Supplement to Ingest Protein While Saving Time..', image: 'omega_3.jpg', link: '#' },
                    { name: 'Probiotics', description: 'Supports digestive health and gut flora balance.', image: 'omega_3.jpg', link: '#' }
                ];
            } else {
                // Recommendations for weight loss with higher activity level
                recommendations = [
                    { name: 'Whey Protein', description: 'Promotes muscle recovery and growth after workouts.', image: 'omega_3.jpg', link: '#' },
                    { name: 'BCAAs', description: 'Supports muscle protein synthesis and reduces muscle soreness.', image: 'omega_3.jpg', link: '#' },
                    { name: 'Creatine Monohydrate', description: 'Increases muscle strength and performance.', image: 'omega_3.jpg', link: '#' }
                ];
            }
            break;
        default:
            recommendations = [];
    }

    return recommendations;
}

function displayRecommendations(recommendations) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    recommendations.forEach(item => {
        const productHTML = `
        <div class="product">
            <a href="${item.link}">
                <img src="${item.image}" alt="${item.name}" style="width: 150px; height: 150px">
            </a>
            <p><b>${item.name}</b></h3>
            <p>${item.description}</p>
    </div>
        `;
        resultsDiv.insertAdjacentHTML('beforeend', productHTML);
    });
}