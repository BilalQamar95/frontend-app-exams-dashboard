import { useSelector, useDispatch } from 'react-redux';

import { RequestKeys } from 'data/constants';

import * as reduxHooks from 'data/redux/hooks';

import * as api from './data/api';
import { loadExams } from './data/reducer';


export const useExamsLoading = () => {
  return reduxHooks.useRequestIsPending(RequestKeys.fetchCourseExams);
};

export const useFetchCourseExams = () => {
  const makeNetworkRequest = reduxHooks.useMakeNetworkRequest();
  const dispatch = useDispatch();
  return (courseId) => {
    return makeNetworkRequest({
      requestKey: RequestKeys.fetchCourseExams,
      promise: api.getCourseExams(courseId),
      onSuccess: (response) => dispatch(loadExams(response)),
    });
  };
};

export const useCourseExamsList = () => {
  return useSelector(state => state.exams.examsList);
};
