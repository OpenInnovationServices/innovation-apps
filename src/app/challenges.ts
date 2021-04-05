export interface Challenge {
  _id: number;
  name: string;
  about: string;
  instructions: string;
  mix_group: string;
  match_group:string;
}


export interface GroupInfo {
  id: number;
  name: string;
  src: string;
}

export interface ItemGroup {
  id: number;
  name: string;
  itemSrc : GroupInfo[];
}

export interface SubmitChallenge {
  mix: string;
  match: string;
  penName: string;
  ideaName: string;
  idea: String;
  code: string;
}