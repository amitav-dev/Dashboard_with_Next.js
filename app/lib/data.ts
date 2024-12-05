import { User } from "./models";
import { connectToDB } from "./utills";

export const fetchUsers = async (q: any, page: any) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = (await User.find({ username: { $regex: regex } })).length;
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id:string) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
// export const fetchUser = (id: string) => ({
//   id: 1,
//   username: "Amitav",
//   email: "amitav@gmail.com",
//   createdAt: Date.now(),
//   phone: "1235634572",
//   address: "Test address",
//   isAdmin: true,
//   isActive: true,
// });
