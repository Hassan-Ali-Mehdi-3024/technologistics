import Image from "next/image";

export function TeamCard({ member }: { member: { name: string; role: string; image: string } }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <Image
        src={member.image}
        alt={member.name}
        width={160}
        height={160}
        className="rounded-full object-cover border-4 border-orange-500"
      />
      <div>
        <h3 className="text-lg font-semibold text-white">{member.name}</h3>
        <p className="text-sm text-gray-300">{member.role}</p>
      </div>
    </div>
  );
}
