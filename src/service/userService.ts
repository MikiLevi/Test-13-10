import User, { IUser } from "../models/userModel";

// Add user
export async function addUserToDb(user: Partial<IUser>): Promise<IUser> {
	const newUser = new User(user);
	return await newUser.save();
};

// Get all users
export async function getAllUsersFromDb(): Promise<IUser[]> {
	console.log("users");
	const users: IUser[] = await User.find().select("-password");
	return users;
};

// Get user by name
export async function getOneUserByNameFromDb(username: string): Promise<IUser> {
	const user = await User.findOne({ username }).select("-password");
	if (user) {
		return user;
	} else {
		throw new Error(`User with username ${username} not found`);
	}
};

// Check user
export async function checkUserAtDb(user: Partial<IUser>): Promise<boolean> {
	const exitUser = await User.findOne();
	if (exitUser) {
		return true;
	} else {
		throw new Error(`User with username ${user} not found`);
	}
};

// Delete user
export async function deleteUserByNameFromDb(username: string): Promise<IUser> {
	const user = await User.findOneAndDelete({ username })
	if (user) {
		return user;
	} else {
		throw new Error(`User with username ${username} not found`);
	}
}
