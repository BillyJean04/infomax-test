import { gql } from "@apollo/client";

const GetAllCars = gql`
    query GetAllCars {
        cars {
            id
            availability
            brand
            color
            description
            img_src
            model
            model_year
            price
        }
    }
`;

export default GetAllCars;
