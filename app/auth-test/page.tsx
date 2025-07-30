import { auth } from "@clerk/nextjs/server";

export default async function AuthTestPage() {
  const { userId } = await auth();
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Auth Test Page</h1>
      {userId ? (
        <p>You are signed in with user ID: {userId}</p>
      ) : (
        <p>You are not signed in</p>
      )}
    </div>
  );
}