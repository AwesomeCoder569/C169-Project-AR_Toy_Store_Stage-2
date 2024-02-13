AFRAME.registerComponent("marker-handler", {
    init: async function() {
        this.el.addEventListener("markerFound", () => {
            console.log("Marker is Found");
            this.handleMarkerFound();
        });
    
        this.el.addEventListener("markerLost", () => {
            console.log("Marker is Lost");
            this.handleMarkerLost();
        });
    },

    handleMarkerFound: function() {
        //Changing button div visibility
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";
    
        var orderButtton = document.getElementById("order-button");
        var orderSummaryButtton = document.getElementById("order-summary-button");
    
        // Handling Click Events
        orderButtton.addEventListener("click", () => {
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks For Order!",
                text: "Your order is on the way!",
                timer: 2000,
                buttons: false
            });
        });
    
        orderSummaryButtton.addEventListener("click", () => {
            swal({
                icon: "warning",
                title: "Order Summary",
                text: "Work In Progress"
            });
        });
    },
  
    handleMarkerLost: function() {
        //Changing button div visibility
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
});