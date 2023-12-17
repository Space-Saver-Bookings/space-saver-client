import {create} from 'zustand';
// import api from '../../services/api';
// import toast from 'react-hot-toast';

const useSettingsFormStore = create(() => ({
  onSubmit: (data) => {
    console.log('Submitted!');
    console.log(data);
    // console.log(typeof data);
    // const userId = 1;
    // try {
    //   const {data: userData} = await api.put(`/users/${userId}`, data);
    //   console.log('Update successful');
    //   console.log(userData);
    //   console.log('default headers:', api.defaults.headers);
    // } catch (err) {
    //   if (err.response) {
    //     console.error('Login error:', err.response || err);

    //     if (err.response.status === 500) {
    //       toast.error(
    //         'An error occurred on the server. Please try again later.'
    //       );
    //     } else {
    //       toast.error('Failed to login: ' + err.response.data.message);
    //     }
    //   }
    // }
  },
}));

export default useSettingsFormStore;
