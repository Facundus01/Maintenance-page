import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import SettingsForm from "./components/settings-form";

interface SettingsPageProps{
    params:{
        storeId: string;
    }
}

const SettingsPage: React.FC<SettingsPageProps> = async ({
    params
}) => {

const {userId} = auth();

if (!userId) {
    redirect('/sign-in');
}

const currentStore = await prismadb.store.findFirst({
    where:{
        id: params.storeId,
        userId
    }
})
if(!currentStore) redirect('/');

    return ( 
      <div className="flex-col">
        <div className="flex-1 space-y-4 pt-6 p-8">
      <SettingsForm initialData={currentStore}/>
        </div>
      </div>
     );
}
 
export default SettingsPage;