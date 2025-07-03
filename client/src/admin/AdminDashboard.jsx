import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import { Users, UserPlus, Mail, Shield, LogOut, Trash2, Plus, Eye, TrendingUp, Activity, UserCheck, X, Menu, GalleryThumbnails, ImageIcon, Image } from 'lucide-react';
import axios from 'axios';
import { setAllContacts, setLoad } from '../redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setAllSubscribers, setLoadi } from '../redux/subscribeSlice';
import { setAllVolunteers, setLoadin } from '../redux/volunteerSlice';
import { useNavigate } from 'react-router-dom';
import {  setAllUsers, setLoading, setUser } from '../redux/authSlice';
import { toast } from 'react-toastify';
import AdminGallerySection from './AdminGallerySection';
const AdminPanel = () => {
const isLoading = useSelector((state) => state.auth.loading);


// Add these state variables at the top of your component
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate=useNavigate();
    const dispatch=useDispatch();
      const [formData, setFormData] = useState({
        email: '',
        password: ''
      });

 const handleValueChange = (e) => {
   
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [activeSection, setActiveSection] = useState('dashboard');
  

  

  const [showModal, setShowModal] = useState(false);



        const fetchAllAdmins = async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/admin/getAllUsers', {
      withCredentials: true,
    });
    if (res.data.success) {
      dispatch(setAllUsers(res.data.users));
      
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => { 
  fetchAllAdmins();
}, [dispatch]);
const { allUsers = [] } = useSelector((state) => state.auth);
console.log(allUsers);





        const fetchAllContacts = async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/contact/get', {
      withCredentials: true,
    });
    if (res.data.success) {
      dispatch(setAllContacts(res.data.contacts));
      
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => { 
  fetchAllContacts();
}, [dispatch]);
const { allContacts = [] } = useSelector((state) => state.contact);
console.log(allContacts);

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const groupByMonth = (data, labelKey) => {
  const grouped = Array(12).fill(0);

  data.forEach(item => {
    const createdAt = new Date(item.createdAt);
    const monthIndex = createdAt.getMonth(); // 0 = Jan
    grouped[monthIndex]++;
  });

  return monthLabels.map((month, index) => ({
    month,
    [labelKey]: grouped[index]
  }));
};

// Example usage:
const contactsData = groupByMonth(allContacts, 'contacts');


        const fetchAllSubscribers = async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/subscribe/get', {
      withCredentials: true,
    });
    if (res.data.success) {
      dispatch(setAllSubscribers(res.data.subscribers));
      
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => { 
  fetchAllSubscribers();
}, [dispatch]);

const { allSubscribers = [] } = useSelector((state) => state.subscribe);
console.log(allSubscribers)


const subscribeData = groupByMonth(allSubscribers, 'subscribers');






        const fetchAllVolunteer = async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/volunteer/get', {
      withCredentials: true,
    });
    if (res.data.success) {
      dispatch( setAllVolunteers(res.data.volunteers));
      
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => { 
  fetchAllVolunteer();
}, [dispatch]);


const {  allVolunteers = [] } = useSelector((state) => state.volunteer);


const countByGender = (volunteers) => {
  const counts = { Male: 0, Female: 0, Other: 0 };

  volunteers.forEach((v) => {
    const gender = v.gender?.toLowerCase();
    if (gender === 'male') counts.Male++;
    else if (gender === 'female') counts.Female++;
    else counts.Other++;
  });

  return [
    { name: 'Male', value: counts.Male, color: '#00695C' },      // Teal
    { name: 'Female', value: counts.Female, color: '#DAA520' },  // Sacred Gold
    { name: 'Other', value: counts.Other, color: '#2C2C2C' }     // Rich Charcoal
  ];
};

const volunteersData = countByGender(allVolunteers);



  const [showModa, setShowModa] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);


const handleLogout = async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/admin/logout", {}, {
      withCredentials: true,
    });
    if (res.data.success) {
      dispatch(setUser(null));
      toast.success('Logout successfully', {
       icon: '✅',
       style: {
         border: '1px solid #28a745',
         padding: '16px',
         color: '#fff',
         background: 'linear-gradient(135deg, #28a745, #218838)',
         fontWeight: '600',
       },
     });
      navigate("/");
      
    }
  } catch (error) {
    console.error(error.response?.data || error.message);
    toast.error(error.response?.data || error.message);
   
  }
};

const removeContact = async (id) => {
  dispatch(setLoad(true)); // Use dispatch for consistency
  try {
    const res = await axios.delete(`http://localhost:5000/api/contact/delete/${id}`, {
      withCredentials: true,
    });
    if (res.data.success) {
      const updatedContact = allContacts.filter(contact => contact._id !== id);
      dispatch(setAllContacts(updatedContact));
      // Optional: Show success message
       toast.success('Contact deleted successfully');
      setShowModa(false);
    }
  } catch (error) {
    console.error(error.message);
  
     toast.error('Failed to delete the contact');
  } finally {
    dispatch(setLoad(false)); // Use dispatch and move to finally block
  }
};




const removeVolunteer = async (id) => {
  dispatch(setLoadin(true)); // Use dispatch for consistency
  try {
    const res = await axios.delete(`http://localhost:5000/api/volunteer/delete/${id}`, {
      withCredentials: true,
    });
    if (res.data.success) {
      const updatedContact = allVolunteers.filter(contact => contact._id !== id);
      dispatch(setAllVolunteers(updatedContact));
      // Optional: Show success message
       toast.success('Volunteer deleted successfully');
       setShowModa(false);
    }
  } catch (error) {
    console.error(error.message);
  
     toast.error('Failed to delete the volunteer');
  } finally {
    dispatch(setLoadin(false)); // Use dispatch and move to finally block
  }
};





const removeSubscriber = async (id) => {
  dispatch(setLoadi(true)); // Use dispatch for consistency
  try {
    const res = await axios.delete(`http://localhost:5000/api/subscribe/delete/${id}`, {
      withCredentials: true,
    });
    if (res.data.success) {
      const updatedContact = allSubscribers.filter(contact => contact._id !== id);
      dispatch(setAllSubscribers(updatedContact));
      // Optional: Show success message
       toast.success('Subscriber deleted successfully');
      setShowModa(false);
    }
  } catch (error) {
    console.error(error.message);
  
     toast.error('Failed to delete the subscriber');
  } finally {
    dispatch(setLoadi(false)); // Use dispatch and move to finally block
  }
};


  const [showModale, setShowModale] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const handleDeleteClick = (admin) => {
    setSelectedAdmin(admin);
    setShowModale(true);
  };

  const confirmDelete = () => {
    if (selectedAdmin) {
      removeAdmin(selectedAdmin._id);
      setShowModale(false);
      setSelectedAdmin(null);
    }
  };

  const cancelDelete = () => {
    setShowModale(false);
    setSelectedAdmin(null);
  };

const removeAdmin = async (id) => {
  dispatch(setLoading(true)); // Use dispatch for consistency
  try {

      const res = await axios.delete(`http://localhost:5000/api/admin/deleteUser/${id}`, {
      withCredentials: true,
    });
    if (res.data.success) {
      const updatedContact = allUsers.filter(contact => contact._id !== id);
      dispatch(setAllUsers(updatedContact));
      // Optional: Show success message
       toast.success('Admin deleted successfully');
 setShowModale(false);
    }
  } catch (error) {
    console.error(error.message);
  
     toast.error('Failed to delete admin');
  } finally {
    dispatch(setLoading(false)); // Use dispatch and move to finally block
  }
};


  const handleSubmit = async (e) => {
         e.preventDefault();
  try {
    dispatch(setLoading(true)); // Correct spelling

    const res = await axios.post('http://localhost:5000/api/admin/admin-register', formData, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

   if (res.data.success) {
      // Add new client to state
      dispatch(setAllUsers([...allUsers, res.data.newUser]));
     toast.success("New admin created successfully")
      // Reset input fields
      setAllUsers({
       email:"",
       password:""
      });

      // Go to clients tab
      setShowModal(false)
     // toast.success('Client added successfully');
    }
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.message || 'Failed to add the admin');
  } finally {
    dispatch(setLoading(false));
  }
  };

 const formattedVolunteers = allVolunteers.map(volunteer => ({
    ...volunteer,
    dateOfBirth: new Date(volunteer.dateOfBirth).toLocaleDateString('en-GB'), // DD/MM/YYYY format
  }));


// const Sidebar = () => (


  
//   <div className="w-64 h-screen bg-[#004D40] shadow-lg fixed left-0 top-0 text-white border-r border-white/10">
//       {/* Header */}
//       <div className="p-6 border-b border-white/10">
//         <div className="flex items-center space-x-3">
//           <div className="w-10 h-10 rounded-lg overflow-hidden">
//   <img src="/public/images/logo/9c2ddc63-1fba-41bf-a057-3857806468e2-removebg-preview.png" alt="Ashwamedh Logo" className="w-full h-full object-cover" />
// </div>
//           <div>
//             <h1 className="text-xl font-bold text-white">Ashwamedh</h1>
//             <p className="text-sm text-white/70">Foundation</p>
//           </div>
          
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="mt-6">
//         <div className="px-6 mb-4">
//           <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider">Main Menu</h3>
//         </div>

//         {[
//           { id: 'dashboard', label: 'Dashboard', icon: Activity },
//           { id: 'contacts', label: 'Contact Details', icon: Users },
//           { id: 'volunteers', label: 'Volunteer Details', icon: UserCheck },
//           { id: 'subscribers', label: 'Subscriber Details', icon: Mail },
//           { id: 'admins', label: 'Admin Management', icon: Shield }
//         ].map((item) => {
//           const Icon = item.icon;
//           const isActive = activeSection === item.id;
//           return (
//             <button
//               key={item.id}
//               onClick={() => setActiveSection(item.id)}
//               className={`w-full flex items-center px-6 py-3 text-left rounded-r-full transition-all duration-300 ${
//                 isActive
//                   ? 'bg-[#00695C] text-[#DAA520] font-semibold'
//                   : 'text-white/80 hover:bg-white/10 hover:text-white'
//               }`}
//             >
//               <Icon className="w-5 h-5 mr-3" />
//               {item.label}
//             </button>
//           );
//         })}

//         {/* Logout Button */}
//         <div className="absolute bottom-6 left-6 right-6">
//           <button onClick={handleLogout} className="w-full flex items-center px-4 py-3 text-red-400 hover:bg-red-100 hover:text-red-600 bg-white/10 rounded-lg transition-all duration-300">
//             <LogOut className="w-5 h-5 mr-3" />
//             Logout
//           </button>
//         </div>
//       </nav>
//     </div>
//   );

const Sidebar = () => (
  <>
    {/* Mobile overlay */}
    {isSidebarOpen && (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={() => setIsSidebarOpen(false)}
      />
    )}
    
    <div className={`w-64 h-screen bg-[#004D40] shadow-lg fixed left-0 top-0 text-white border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0`}>
      {/* Close button for mobile */}
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 lg:hidden"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img src="/public/images/logo/9c2ddc63-1fba-41bf-a057-3857806468e2-removebg-preview.png" alt="Ashwamedh Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Ashwamedh</h1>
            <p className="text-sm text-white/70">Foundation</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        <div className="px-6 mb-4">
          <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider">Main Menu</h3>
        </div>

        {[
          { id: 'dashboard', label: 'Dashboard', icon: Activity },
          { id: 'contacts', label: 'Contact Details', icon: Users },
          { id: 'volunteers', label: 'Volunteer Details', icon: UserCheck },
          { id: 'subscribers', label: 'Subscriber Details', icon: Mail },
          { id: 'admins', label: 'Admin Management', icon: Shield },
            { id: 'gallery', label: 'Gallery', icon: Image },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsSidebarOpen(false); // Close sidebar on mobile after selection
              }}
              className={`w-full flex items-center px-6 py-3 text-left rounded-r-full transition-all duration-300 ${
                isActive
                  ? 'bg-[#00695C] text-[#DAA520] font-semibold'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          );
        })}

        {/* Logout Button */}
        <div className="absolute bottom-6 left-6 right-6">
          <button onClick={handleLogout} className="w-full flex items-center px-4 py-3 text-red-400 hover:bg-red-100 hover:text-red-600 bg-white/10 rounded-lg transition-all duration-300">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </nav>
    </div>
  </>
);
 


//   const Header = () => (
//     <div className="ml-64 bg-[#FFFEF7] border-b border-[#F4E4BC] px-6 py-4 shadow-sm">
//   <div className="flex items-center justify-between">
//     <div>
//       <h2 className="text-2xl font-bold text-[#2C2C2C] capitalize">
//         {activeSection === 'dashboard' ? 'Dashboard Overview' : activeSection.replace(/([A-Z])/g, ' $1')}
//       </h2>
//       <p className="text-[#555555] mt-1">
//         {activeSection === 'dashboard' && "Welcome back! Here's what’s happening with your foundation."}
//         {activeSection === 'contacts' && 'Manage and view all contact inquiries'}
//         {activeSection === 'volunteers' && 'Track and manage volunteer information'}
//         {activeSection === 'subscribers' && 'Monitor newsletter subscribers'}
//         {activeSection === 'admins' && 'Manage admin users and permissions'}
//       </p>
//     </div>
//     <div className="flex items-center space-x-4">
//       <div className="w-10 h-10 bg-[#004D40] rounded-full flex items-center justify-center shadow-md">
//         <span className="text-white font-semibold">AD</span>
//       </div>
//     </div>
//   </div>
// </div>

//   );



// Updated Header component
const Header = () => (
  <div className="lg:ml-64 bg-[#FFFEF7] border-b border-[#F4E4BC] px-4 lg:px-6 py-4 shadow-sm">
    <div className="flex items-center justify-between">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="p-3 rounded-lg hover:bg-gray-100 lg:hidden"
      >
        <Menu className="w-6 h-6 text-[#2C2C2C]" />
      </button>

      <div className="flex-1 lg:flex-none">
        <h2 className="text-xl lg:text-2xl font-bold text-[#2C2C2C] capitalize">
          {activeSection === 'dashboard' ? 'Dashboard Overview' : activeSection.replace(/([A-Z])/g, ' $1')}
        </h2>
        <p className="text-[#555555] mt-1 text-sm lg:text-base">
          {activeSection === 'dashboard' && "Welcome back! Here's what's happening with your foundation."}
          {activeSection === 'contacts' && 'Manage and view all contact inquiries'}
          {activeSection === 'volunteers' && 'Track and manage volunteer information'}
          {activeSection === 'subscribers' && 'Monitor newsletter subscribers'}
          {activeSection === 'admins' && 'Manage admin users and permissions'}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#004D40] rounded-full flex items-center justify-center shadow-md">
          <span className="text-white font-semibold text-sm lg:text-base">AD</span>
        </div>
      </div>
    </div>
  </div>
);


  // const StatsCard = ({ title, value, icon: Icon, color, change }) => (
   
  //   <div className="bg-[#FFFEF7] rounded-xl shadow-sm border border-[#F4E4BC] p-6 hover:shadow-md transition-shadow">
  //   <div className="flex items-center justify-between">
  //     <div>
  //       <p className="text-sm font-medium text-[#555555]">{title}</p>
  //       <p className="text-2xl font-bold text-[#2C2C2C] mt-1">{value}</p>
  //       {change && (
  //         <div className="flex items-center mt-2">
  //           <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
  //           <span className="text-green-600 text-sm font-medium">{change}</span>
  //         </div>
  //       )}
  //     </div>
  //     <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
  //       <Icon className="w-6 h-6 text-white" />
  //     </div>
  //   </div>
  // </div>
  // );

const StatsCard = ({ title, value, icon: Icon, color, change }) => (
  <div className="bg-[#FFFEF7] rounded-xl shadow-sm border border-[#F4E4BC] p-4 lg:p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div className="min-w-0 flex-1">
        <p className="text-xs lg:text-sm font-medium text-[#555555] truncate">{title}</p>
        <p className="text-xl lg:text-2xl font-bold text-[#2C2C2C] mt-1">{value}</p>
        {change && (
          <div className="flex items-center mt-2">
            <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-1" />
            <span className="text-green-600 text-xs lg:text-sm font-medium">{change}</span>
          </div>
        )}
      </div>
      <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center ${color} flex-shrink-0`}>
        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
      </div>
    </div>
  </div>
);

// const Table = ({ data, columns, fieldKeys, onRemove }) => {


//   const handleDeleteClick = (item) => {
//     setItemToDelete(item);
//     setShowModa(true);
//   };

//   const confirmDelete = () => {
//     if (itemToDelete) {
//       onRemove(itemToDelete._id || itemToDelete.id);
//       setShowModa(false);
//       setItemToDelete(null);
//     }
//   };

//   const cancelDelete = () => {
//     setShowModa(false);
//     setItemToDelete(null);
//   };

//   return (
//     <div className="relative">
//       <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 border-b border-gray-100">
//               <tr>
//                 {columns.map((column, index) => (
//                   <th
//                     key={index}
//                     className="px-6 py-4 text-left text-xs font-semibold text-[#2C2C2C] uppercase tracking-wider"
//                   >
//                     {column}
//                   </th>
//                 ))}
//                 <th className="px-6 py-4 text-right text-xs font-semibold text-[#2C2C2C] uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-[#F4E4BC]">
//               {data && data.length > 0 ? (
//                 data.map((item) => (
//                   <tr key={item._id || item.id} className="hover:bg-[#FDF6E3] transition-colors">
//                     {fieldKeys.map((key, i) => (
//                       <td key={i} className="px-6 py-4 text-sm text-[#2C2C2C]">
//                         {key === 'message' ? (
//                           <div className="max-w-xs truncate" title={item[key]}>
//                             {item[key] || '-'}
//                           </div>
//                         ) : (
//                           item[key] || '-'
//                         )}
//                       </td>
//                     ))}
//                     <td className="px-6 py-4 text-right">
//                       <button
//                         onClick={() => handleDeleteClick(item)}
//                         className="text-red-600 hover:text-white hover:bg-red-600 p-2 rounded-lg transition-colors"
//                         title="Remove"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan={columns.length + 1}
//                     className="px-6 py-8 text-center text-gray-500"
//                   >
//                     No data available
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Delete Confirmation Modal */}
//       {showModa && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">
//               Do you want to delete?
//             </h3>
//             <p className="text-gray-600 mb-6">Are you sure?</p>
            
//             <div className="flex gap-3 justify-end">
//               <button
//                 onClick={cancelDelete}
//                 className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


// Updated Table component
const Table = ({ data, columns, fieldKeys, onRemove }) => {
  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setShowModa(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      onRemove(itemToDelete._id || itemToDelete.id);
      setShowModa(false);
      setItemToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowModa(false);
    setItemToDelete(null);
  };

  return (
    <div className="relative">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="px-3 lg:px-6 py-3 lg:py-4 text-left text-xs font-semibold text-[#2C2C2C] uppercase tracking-wider whitespace-nowrap"
                  >
                    {column}
                  </th>
                ))}
                <th className="px-3 lg:px-6 py-3 lg:py-4 text-right text-xs font-semibold text-[#2C2C2C] uppercase tracking-wider whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#F4E4BC]">
              {data && data.length > 0 ? (
                data.map((item) => (
                  <tr key={item._id || item.id} className="hover:bg-[#FDF6E3] transition-colors">
                    {fieldKeys.map((key, i) => (
                      <td key={i} className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-[#2C2C2C] whitespace-nowrap">
                        {key === 'message' ? (
                          <div className="max-w-xs truncate" title={item[key]}>
                            {item[key] || '-'}
                          </div>
                        ) : (
                          <span className="block truncate max-w-[150px] lg:max-w-none" title={item[key]}>
                            {item[key] || '-'}
                          </span>
                        )}
                      </td>
                    ))}
                    <td className="px-3 lg:px-6 py-3 lg:py-4 text-right">
                      <button
                        onClick={() => handleDeleteClick(item)}
                        className="text-red-600 hover:text-white hover:bg-red-600 p-1.5 lg:p-2 rounded-lg transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3 h-3 lg:w-4 lg:h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showModa && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 lg:p-6 max-w-md w-full shadow-xl">
            <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-4">
              Do you want to delete?
            </h3>
            <p className="text-gray-600 mb-6 text-sm lg:text-base">Are you sure?</p>
            
            <div className="flex gap-3 justify-end">
              <button
                onClick={cancelDelete}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
//   const ChartCard = ({ title, children, className = "" }) => (
   
//     <div className={`bg-[#FFFEF7] rounded-xl shadow-sm border border-[#F4E4BC] p-6 ${className}`}>
//   <h3 className="text-lg font-semibold text-[#2C2C2C] mb-4">{title}</h3>
//   {children}
// </div>

//   );



// Updated ChartCard component
const ChartCard = ({ title, children, className = "" }) => (
  <div className={`bg-[#FFFEF7] rounded-xl shadow-sm border border-[#F4E4BC] p-4 lg:p-6 ${className}`}>
    <h3 className="text-base lg:text-lg font-semibold text-[#2C2C2C] mb-4">{title}</h3>
    {children}
  </div>
);

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <StatsCard 
                title="Notifications" 
                value={allContacts.length} 
                icon={Users} 
              color="bg-[#DAA520]"
                
              />
              <StatsCard 
                title="Total Volunteers" 
                value={allVolunteers.length} 
                icon={UserCheck} 
                color="bg-green-700"
                
              />
              <StatsCard 
                title="Subscribers" 
                value={allSubscribers.length} 
                icon={Mail} 
                color="bg-[#2C2C2C]"
               
              />
              <StatsCard 
                title="Admin Users" 
               
                value={allUsers.length} 
                icon={Shield} 
               color="bg-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <ChartCard title="Contact Inquiries Trend">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={contactsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="contacts" fill="#FF5722" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

             <ChartCard title="Volunteer Status">
  <ResponsiveContainer width="100%" height={250}>
    <PieChart>
      <Pie
        data={volunteersData} // ✅ use processed data here
        cx="50%"
        cy="50%"
        outerRadius={80}
        paddingAngle={5}
        dataKey="value"
      >
        {volunteersData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>

  {/* Legend */}
  <div className="flex justify-center space-x-4 mt-4">
    {volunteersData.map((entry, index) => (
      <div key={index} className="flex items-center">
        <div
          className="w-3 h-3 rounded-full mr-2"
          style={{ backgroundColor: entry.color }}
        ></div>
        <span className="text-sm text-gray-600">{entry.name}: {entry.value}</span>
      </div>
    ))}
  </div>
</ChartCard>

            </div>

          
            
<ChartCard title="Subscriber Growth Over Time">
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={subscribeData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
      <XAxis dataKey="month" stroke="#666" />
      <YAxis stroke="#666" />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="subscribers"
        stroke="#00695C"
        strokeWidth={3}
        dot={{ fill: '#00695C', strokeWidth: 2, r: 6 }}
      />
    </LineChart>
  </ResponsiveContainer>
</ChartCard>

          </div>
        );

      case 'contacts':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Contact Inquiries ({allContacts.length})</h3>
                <p className="text-gray-500">Manage and respond to contact form submissions</p>
              </div>
            </div>
            
            <ChartCard title="Monthly Contact Trends">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={contactsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Bar dataKey="contacts" fill="#FF5722" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

           <Table
  data={allContacts}
  columns={['First Name', 'Last Name', 'Email', 'Phone', 'Message', 'Preferred Contact']}
  fieldKeys={['firstName', 'lastName', 'email', 'phone', 'message', 'preferredContact']}
  onRemove={removeContact}
/>

          </div>
        );

      case 'volunteers':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Volunteer Database ({allVolunteers.length})</h3>
                <p className="text-gray-500">Track and manage volunteer information</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
<ChartCard title="Volunteer Status">
  <ResponsiveContainer width="100%" height={250}>
    <PieChart>
      <Pie
        data={volunteersData} // ✅ use processed data here
        cx="50%"
        cy="50%"
        outerRadius={80}
        paddingAngle={5}
        dataKey="value"
      >
        {volunteersData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>

  {/* Legend */}
  <div className="flex justify-center space-x-4 mt-4">
    {volunteersData.map((entry, index) => (
      <div key={index} className="flex items-center">
        <div
          className="w-3 h-3 rounded-full mr-2"
          style={{ backgroundColor: entry.color }}
        ></div>
        <span className="text-sm text-gray-600">{entry.name}: {entry.value}</span>
      </div>
    ))}
  </div>
</ChartCard>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <StatsCard 
  title="Total Volunteers" 
  value={allVolunteers.length} 
  icon={UserCheck} 
  color="bg-orange-500" // Deep Teal
/>

<StatsCard 
  title="New This Month" 
  value={allVolunteers.filter(v => new Date(v.createdAt).getMonth() === new Date().getMonth()).length} 
  icon={UserPlus} 
  color="bg-[#00695C]" // Bright Teal
/>


<StatsCard 
  title="Avg Age" 
  value={
    allVolunteers.length 
      ? Math.round(allVolunteers.reduce((sum, v) => sum + parseInt(v.age || 0), 0) / allVolunteers.length) 
      : 0
  } 
  icon={Activity} 
  color="bg-[#2C2C2C]" // Rich Charcoal
/>

              </div>
            </div>
            

 <Table 
              data={formattedVolunteers}
              columns={['Name','Date of birth', 'Age', 'Gender', 'Email', 'Phone', 'Pin Code', 'Occupation']}
              fieldKeys={['name','dateOfBirth','age','gender','email','phone','pinCode','occupation']}
              onRemove={removeVolunteer}
              type="volunteer"
            />
</div>
           
          

        );

      case 'subscribers':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Newsletter Subscribers ({allSubscribers.length})</h3>
                <p className="text-gray-500">Manage your newsletter subscriber list</p>
              </div>
            </div>
<ChartCard title="Subscriber Growth Over Time">
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={subscribeData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
      <XAxis dataKey="month" stroke="#666" />
      <YAxis stroke="#666" />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="subscribers"
        stroke="#00695C"
        strokeWidth={3}
        dot={{ fill: '#00695C', strokeWidth: 2, r: 6 }}
      />
    </LineChart>
  </ResponsiveContainer>
</ChartCard>

            <Table 
              data={allSubscribers}
              columns={['Name', 'Email']}
              fieldKeys={['name','email']}
               onRemove={removeSubscriber}
              type="subscriber"
            />
          </div>
        );

      case 'admins':
//         return (
//           <div className="space-y-6">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">Admin Management ({allUsers.length})</h3>
//                 <p className="text-gray-500">Manage administrative users and permissions</p>
//               </div>
//               <button
//                 onClick={() => setShowModal(true)}
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//               >
//                 <Plus className="w-4 h-4 mr-2" />
//                 Add New Admin
//               </button>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
//               <table className="w-full">
//                 <thead className="bg-gray-50 border-b border-gray-100">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
//                     <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
               
//                 <tbody className="divide-y divide-gray-100">
//    {allUsers.map((admin) => (
//           <tr key={admin._id} className="hover:bg-gray-50 transition-colors">
//             <td className="px-6 py-4 text-sm text-gray-900">{admin.email}</td>
//             <td className="px-6 py-4 text-right">
//               {admin.role !== 'super-admin' ? (
//                 <button
//                   onClick={() => handleDeleteClick(admin)}
//                   className="text-red-600 hover:text-red-800 hover:bg-red-50 p-2 rounded-lg transition-colors"
//                 >
//                   <Trash2 className="w-4 h-4" />
//                 </button>
//               ) : (
//                 <span className="text-gray-400 text-xs px-2 py-1 bg-gray-100 rounded">
//                   Protected
//                 </span>
//               )}
//             </td>
//           </tr>
//         ))}
// </tbody>
//  {showModale && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg p-4 lg:p-6 max-w-md w-full shadow-xl">
//             {/* Modal Header */}
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Confirm Deletion
//               </h3>
//               <button
//                 onClick={cancelDelete}
//                 className="text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Modal Content */}
//             <div className="mb-6">
//               <p className="text-gray-700 mb-2">
//                 Are you sure you want to delete this admin?
//               </p>
//               <div className="bg-gray-50 p-3 rounded-lg">
//                 <p className="text-sm text-gray-600">
//                   <strong>Email:</strong> {selectedAdmin?.email}
//                 </p>
//               </div>
//               <p className="text-sm text-red-600 mt-3">
//                 This action cannot be undone.
//               </p>
//             </div>

//             {/* Modal Actions */}
//             <div className="flex gap-3 justify-end">
//               <button
//                 onClick={cancelDelete}
//                 className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
//               >
//                 Delete Admin
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//               </table>
//             </div>

//             {showModal && (
//               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//                 <div className="bg-white rounded-lg p-4 lg:p-6 max-w-md w-full shadow-xl">
//                   <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Admin</h3>
//                   <form className="space-y-4" onSubmit={handleSubmit}>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                       <input
//                         type="email"
//                         name='email'
//                         value={formData.email}
//                         onChange={handleValueChange}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                         placeholder="admin@ashwamedh.org"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                       <input
//                         type="password"
//                         name='password'
//                         value={formData.password}
//                         onChange={handleValueChange}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                         placeholder="Enter secure password"
//                       />
//                     </div>
                  
//                   <div className="flex justify-end space-x-3 mt-6">
//                     <button
//                       onClick={() => setShowModal(false)}
//                       className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
//                     >
//                       Cancel
//                     </button>
                   
//                     <button
//   type="submit"
//   disabled={isLoading}
//   className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
// >
//   {isLoading ? (
//     <>
//       <svg
//         className="animate-spin h-4 w-4 text-white"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//       >
//         <circle
//           className="opacity-25"
//           cx="12"
//           cy="12"
//           r="10"
//           stroke="currentColor"
//           strokeWidth="4"
//         />
//         <path
//           className="opacity-75"
//           fill="currentColor"
//           d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//         />
//       </svg>
//       Adding...
//     </>
//   ) : (
//     'Add Admin'
//   )}
// </button>

//                   </div>
//                   </form>
//                 </div>
//               </div>
//             )}
//           </div>
//         );
return (
  <div className="space-y-6 p-4 sm:p-6">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Admin Management ({allUsers.length})</h3>
        <p className="text-sm sm:text-base text-gray-500">Manage administrative users and permissions</p>
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-colors w-full sm:w-auto"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add New Admin
      </button>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Mobile Card View */}
      <div className="block sm:hidden">
        <div className="divide-y divide-gray-100">
          {allUsers.map((admin) => (
            <div key={admin._id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{admin.email}</p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {admin.role !== 'super-admin' ? (
                    <button
                      onClick={() => handleDeleteClick(admin)}
                      className="text-red-600 hover:text-red-800 hover:bg-red-50 p-2 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  ) : (
                    <span className="text-gray-400 text-xs px-2 py-1 bg-gray-100 rounded">
                      Protected
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {allUsers.map((admin) => (
              <tr key={admin._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-900">{admin.email}</td>
                <td className="px-6 py-4 text-right">
                  {admin.role !== 'super-admin' ? (
                    <button
                      onClick={() => handleDeleteClick(admin)}
                      className="text-red-600 hover:text-red-800 hover:bg-red-50 p-2 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  ) : (
                    <span className="text-gray-400 text-xs px-2 py-1 bg-gray-100 rounded">
                      Protected
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Delete Confirmation Modal */}
    {showModale && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-4 lg:p-6 max-w-md w-full shadow-xl mx-4">
          {/* Modal Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Confirm Deletion
            </h3>
            <button
              onClick={cancelDelete}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="mb-6">
            <p className="text-gray-700 mb-2">
              Are you sure you want to delete this admin?
            </p>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600 break-all">
                <strong>Email:</strong> {selectedAdmin?.email}
              </p>
            </div>
            <p className="text-sm text-red-600 mt-3">
              This action cannot be undone.
            </p>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={cancelDelete}
              className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors order-2 sm:order-1"
            >
              Cancel
            </button>
            <button
              onClick={confirmDelete}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors order-1 sm:order-2"
            >
              Delete Admin
            </button>
          </div>
        </div>
      </div>
    )}


    {/* {showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-4 lg:p-6 max-w-md w-full shadow-xl mx-4">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Admin</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name='email'
                value={formData.email}
                onChange={handleValueChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                placeholder="admin@ashwamedh.org"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name='password'
                value={formData.password}
                onChange={handleValueChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                placeholder="Enter secure password"
              />
            </div>
          
            <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3 mt-6">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors order-2 sm:order-1"
              >
                Cancel
              </button>
             
              <button
                type="submit"
                disabled={isLoading}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Adding...
                  </>
                ) : (
                  'Add Admin'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    )} */}

{showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="relative bg-white rounded-lg p-4 lg:p-6 max-w-md w-full shadow-xl mx-4">
      
      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-1 right-3 text-gray-500 hover:text-gray-700 text-xl font-semibold focus:outline-none"
      >
        &times;
      </button>

      <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Admin</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleValueChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
            placeholder="admin@ashwamedh.org"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleValueChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
            placeholder="Enter secure password"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3 mt-6">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors order-2 sm:order-1"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Adding...
              </>
            ) : (
              'Add Admin'
            )}
          </button>
        </div>
      </form>
    </div>
  </div>
)}



  </div>
);
case 'gallery':
  return <AdminGallerySection/>
      default:
        return <div>Section not found</div>;
    }
  };

  return (
 

 <div className="min-h-screen bg-gray-50">
    <Sidebar />
    <div className="lg:ml-64">
      <Header />
      <main className="p-4 lg:p-6">
        {renderContent()}
      </main>
    </div>
  </div>

  );
};

export default AdminPanel;
