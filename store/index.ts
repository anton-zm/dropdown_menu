import { makeAutoObservable } from 'mobx';

export class Storage {
    public activeId = '';

    constructor() {
        makeAutoObservable(this);
    }

    setActiveId(v: string) {
        this.activeId = v;
    }
}

export const store = new Storage();
