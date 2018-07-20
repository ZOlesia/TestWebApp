import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    showImg: boolean;
    img1 = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg';
    img2 = 'https://d1n9fh5wgwqe5p.cloudfront.net/imgcache/resort/krn/1.jpg';
    img = this.img1;
    ngOnInit() {
        this.showImg = false;
    }

    toggleImgs() {
        this.showImg = true;
        this.img = this.img === this.img1 ? this.img2 : this.img1;
    }
}
