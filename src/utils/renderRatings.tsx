import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'

export const handleRatings = (userRatings: number) => {
    const ratings = []
    for(let i = 0; i < 5; i++){
        if(i < userRatings){
            ratings.push(solidStar)
        }else{
            ratings.push(regularStar)
        }
    }

    return ratings
}