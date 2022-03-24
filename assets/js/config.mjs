export class Database {

    /**
     * Initialize the database
     */
    constructor() {
        this.db = window.localStorage;
    }


    /**
     * Get user profile data
     * @returns {*}
     */
    getUserData() {
        try {
            return this.db.getItem('userData');
        } catch (error) {
            console.log(error);
            return {};
        }
    }

    /**
     * Set user profile data
     * @param {*} data 
     */
    setUserData(data) {
        try {
            this.db.setItem('userData', data);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    /**
     * Get Trending Fashion Week data
     * TODO: Retrieve data from database
     * @returns 
     */
    getTrendingData() {
        return [
            {
                id: "1",
                name: "Gucci",
                price: "100",
                url: "https://www.gucci.com/au/en_au/",
                img: "https://static01.nyt.com/images/2021/02/25/fashion/24GUCCITRUMP-dapper-dan/24GUCCITRUMP-dapper-dan-mobileMasterAt3x-v2.jpg",
            },
            {
                id: "2",
                name: "V-Lone",
                price: "200",
                url: "",
                img: "http://sneakerbardetroit.com/wp-content/uploads/2017/01/asap-rocky-asap-ferg-VLONE-nike-air-force-1-low.png",
            }
        ]
    }

    /**
     * Retrieve images from database
     * @returns - Array of images
     */
    getImages() {
        try {
            return this.db.getItem('images');
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    /**
     * Save the image to the database
     * @param {*} data 
     * @returns - true if successful, false otherwise
     */

    setImages(data) {
        try {
            this.db.setItem('images', data);
            return true;

        } catch (error) {
            console.log(error);
            return false;
        }
    }

    setWardrobe(data) {
        try {
            let wardrobe = this.getWardrobe();
            wardrobe.push(data);
            this.db.setItem('wardrobe', wardrobe);

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getWardrobe() {
        try {
            return this.db.getItem('wardrobe');
        } catch (error) {
            console.log(error);
            return [];
        }
    }


}