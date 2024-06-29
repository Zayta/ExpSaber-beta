
export default interface FollowersInfo {
    followingCount: number,
    meFollowing: boolean,
    following: BLPlayerFollower[],
    followersCount: number,
    iFollow: boolean,
    followers: BLPlayerFollower[]
    
}

export interface BLPlayerFollower {
    id: string,
    name: string,
    avatar: string
}

export enum FollowDirection {
    FOLLOWING='following',
    FOLLOWERS='followers'
}