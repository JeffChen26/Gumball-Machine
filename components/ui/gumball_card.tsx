import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./card";
  import { Button } from "./button";
  import { useReadContract } from "wagmi";
  import { useWriteContract } from "wagmi";
  import { GumballForm } from "./gumball_form";
  
  const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "input",
            "type": "uint256"
          }
        ],
        "name": "addFreshGumballs",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getGumball",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getNumberOfGumballs",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
  ] as const;
  
  export default function GumballCard() {
    const { writeContract } = useWriteContract();
    async function getAGumball() {
      await writeContract({
        address: "0x234f5CBb80481EF85e418C694F87Ee1dAAd7E723",
        abi,
        functionName: "getGumball",
        args: [],
      });
    }
  
    function ViewingGumball() {
      const { data } = useReadContract({
        abi,
        address: "0x234f5CBb80481EF85e418C694F87Ee1dAAd7E723",
        functionName: "getNumberOfGumballs",
      });
      return data;
    }
  
    return (
      <div>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Gumball Machine</CardTitle>
              <CardDescription>
                <p>Number of Gumballs: {ViewingGumball()?.toString()}</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="p-2" onClick={() => getAGumball()}>
                Get a Gumball{" "}
              </Button>
            </CardContent>
            <CardFooter>
              <GumballForm />
            </CardFooter>
          </Card>
      </div>
    );
  }