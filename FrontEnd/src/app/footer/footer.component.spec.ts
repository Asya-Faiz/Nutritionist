import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { RouteService } from 'src/app/services/route.service';
describe('FooterComponent', () => {
    let footercomponent: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent],
            imports: [RouterTestingModule,
                HttpClientTestingModule,
            ],
            providers: [AuthenticationService, RouteService]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        footercomponent = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(footercomponent).toBeTruthy();
    });
    it('should contain div tag', () => {
        let element = fixture.debugElement.query(By.css('div'));
        expect(element).toBeTruthy();
    });
});