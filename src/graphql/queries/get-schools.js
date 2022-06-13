import { gql } from 'graphql-tag';

export const GET_SCHOOLS_QUERY = gql`
	query {
		getSchools {
			Id
			Name
			Address {
				Address
				Suite
				City
				State
				Zip
			}
			Program
			Degree
			From {
				Month
				Year
			}
			To {
				Month
				Year
			}
			Created
			Version
		}
	}
`;
