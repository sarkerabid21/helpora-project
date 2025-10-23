import React, { useEffect, useState } from 'react';
import loadingLottie from '../../assets/loading.json';
import useAuth from '../../hooks/useAuth';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import { useParams } from 'react-router';
import Lottie from 'lottie-react';

const UpdatePost = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [post, setPost] = useState(null);
  const [deadline, setDeadline] = useState(new Date());

  useEffect(() => {
    fetch(`http://localhost:5000/volunteer/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setDeadline(new Date(data.deadline));
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedPost = {
      thumbnail: form.thumbnail.value,
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      location: form.location.value,
      neededVolunteers: form.neededVolunteers.value,
      deadline: deadline,
      organizerName: user.displayName,
      organizerEmail: user.email,
    };

    fetch(`http://localhost:5000/volunteer/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire('Success!', 'Post updated successfully.', 'success');
        }
      });
  };

  if (!post) return <Lottie className='my-10' animationData={loadingLottie} loop={true} />
  return (
    <div className="max-w-2xl mx-auto p-6 my-10 bg-gray-800 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Volunteer Post</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input type="text" name="thumbnail" defaultValue={post.thumbnail} className="input input-bordered w-full" placeholder="Thumbnail URL" required />
        <input type="text" name="title" defaultValue={post.title} className="input input-bordered w-full" placeholder="Post Title" required />
        <textarea name="description" defaultValue={post.description} className="textarea textarea-bordered w-full" placeholder="Description" required></textarea>
        <select name="category" defaultValue={post.category} className="select select-bordered w-full">
          <option>healthcare</option>
          <option>education</option>
          <option>social service</option>
          <option>animal welfare</option>
        </select>
        <input type="text" name="location" defaultValue={post.location} className="input input-bordered w-full" placeholder="Location" required />
        <input type="number" name="neededVolunteers" defaultValue={post.neededVolunteers} className="input input-bordered w-full" placeholder="Number of Volunteers Needed" required />
        
        <div>
          <label className="block mb-1 font-medium">Deadline</label>
          <DatePicker selected={deadline} onChange={(date) => setDeadline(date)} className="input input-bordered w-full" />
        </div>

        <input type="text" readOnly value={user.displayName} className="input input-bordered w-full " />
        <input type="email" readOnly value={user.email} className="input input-bordered w-full " />

        <button type="submit" className="btn btn-primary w-full mt-4">Update Post</button>
      </form>
    </div>
  );
};

export default UpdatePost;
