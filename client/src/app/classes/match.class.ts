
export class Match {
  home: teamInfo;
  away: teamInfo;
  scheduledTime: schedule;
  casterName: string;
  casterUrl: string;
  replays: any;
  forfeit: boolean;
  other: any;
  vodLinks:Array<string>;
  mapBans: mapBans;

  constructor() {
    this.home = {
      teamName: '',
      logo: '',
      wins: null,
      losses: null,
      score: null,
      dominator: false
    }
    this.away = {
      teamName: '',
      logo: '',
      wins: null,
      losses: null,
      score: null,
      dominator: false
    }
    this.scheduledTime = {
      startTime: null,
      endTime: null
    }
    this.forfeit = null;
    this.casterName = '';
    this.casterUrl = '';
    this.other = {};
    this.replays = {};
    this.vodLinks = [];
    this.mapBans = {
      awayOne: '',
      awayTwo: '',
      homeOne: '',
      homeTwo: ''
    };
  }
}



export interface teamInfo {
  teamName: string,
  logo: string,
  wins: string,
  losses: string,
  score: any,
  dominator: boolean
}

export interface schedule {
  startTime: string,
  endTime: string
}

export interface mapBans {
  awayOne: string,
  awayTwo: string,
  homeOne: string,
  homeTwo: string
}
