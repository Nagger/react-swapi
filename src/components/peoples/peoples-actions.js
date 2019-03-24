import { SwapiService } from "../../services/swapi-service";

export const peoplesFetchRequest = () => ({
  type: "FETCH_PEOPLE_REQUEST"
});

export const peoplesFetchSuccess = data => ({
  type: "FETCH_PEOPLE_SUCCESS",
  payload: data
});

export const peoplesFetchFailure = error => ({
  type: "FETCH_PEOPLE_FAILURE",
  payload: error
});

export const fetchPeoples = ({
  peoplesFetchRequest,
  peoplesFetchSuccess,
  peoplesFetchFailure
}) => {
  peoplesFetchRequest();
  SwapiService.fetchResource("people/")
    .then(data => peoplesFetchSuccess(data))
    .catch(error => peoplesFetchFailure(error));
};
